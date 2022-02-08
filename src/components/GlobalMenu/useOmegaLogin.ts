import { onBeforeUnmount } from "vue";
import { useAuth } from "@/utility/useAuth";

export const useOmegaLogin = (): { login: () => void } => {
  const scope = 'identify guilds';
  const discordBaseUrl = process.env.VUE_APP_DISCORD_BASE_API_URL;
  const clientId = process.env.VUE_APP_DISCORD_CLIENT_ID;
  const callbackUrl = process.env.VUE_APP_DISCORD_CALLBACK_URL;
  const baseUrl = process.env.VUE_APP_BASE_URL;

  const login = () => {
    window.removeEventListener('message', recieveMessage);
    
    const name = 'loginWindow';
    const windowFeatures = 'toolbar=no, menubar=no, width=600, height=800';
    const url = `${discordBaseUrl}/oauth2/authorize?client_id=${clientId}&redirect_uri=${callbackUrl}&response_type=code&scope=${scope}`

    window.open(url, name, windowFeatures);

    window.addEventListener('message', recieveMessage);
  }

  const recieveMessage = async (message: MessageEvent) => {
    if (message.origin !== baseUrl) return;
    
    const { clientLogin } = useAuth();
    const { data } = message;
    const params = new URLSearchParams(data);
    const code = params.get('code');

    if (!code) return;

    await clientLogin(code);

    window.removeEventListener('message', recieveMessage);
  }

  onBeforeUnmount(() => {
    window.removeEventListener('message', recieveMessage);
  })

  return {
    login,
  };
}