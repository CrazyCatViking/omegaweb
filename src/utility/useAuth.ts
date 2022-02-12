import { ref } from 'vue';
import gql from 'graphql-tag';
import { useGraphQL } from '@/graphql/useGraphQL'; 

interface ISelf extends Record<string, any> {
  id: string;
  username: string;
  guildContext: IGuild;
  availableGuilds: IGuild[];
}

interface IGuild {
  id: string;
  name: string;
}

const LOGIN = gql`
  mutation Login($authCode: String!) {
    login(authCode: $authCode)
  }
`;

const GET_SELF = gql`
  query GetSelf {
    self {
      id
      username
      avatar

      guildContext {
        id
        name
        icon
      }

      availableGuilds {
        id
        name
      }
    }
  }
`;

const CHANGE_GUILD_CONTEXT = gql`
  mutation ChangeGuildContext($guildId: HashId!) {
    changeGuildContext(guildId: $guildId)
  }
`;

const self = ref<ISelf>();

export const useAuth = () => {
  const { client } = useGraphQL();

  const clientLogin = async (code: string) => {
    const { data } = await client.mutation({
      mutation: LOGIN,
      variables: {
        authCode: code,
      },
    });

    if (data) await clientAuth();
  }

  const clientAuth = async () => {
    const { data } = await client.query({
      query: GET_SELF,
    });

    self.value = data.self;
  }

  const changeGuildContext = async (guildId: string) => {
    if (guildId === self.value?.guildContext?.id) return;

    const variables = {
      guildId,
    };
    
    const { data } = await client.mutation({
      mutation: CHANGE_GUILD_CONTEXT,
      variables,
    });

    if (!data.changeGuildContext) return; // Show some notification if this fails
    clientAuth();
  }

  return {
    clientLogin,
    clientAuth,
    changeGuildContext,
    self,
  };
}