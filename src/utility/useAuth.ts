import { ref } from 'vue';
import gql from 'graphql-tag';
import { useGraphQL } from '@/graphql/useGraphQL'; 

interface ISelf extends Record<string, any> {
  id: string;
  username: string;
}

const login = gql`
mutation Login($authCode: String!) {
    login(authCode: $authCode)
  }
`;

const getSelf = gql`
query GetSelf {
    self {
      id
      username
    }
  }
`;

const self = ref<ISelf>();

export const useAuth = () => {
  const { client } = useGraphQL();

  const clientLogin = async (code: string) => {
    const { data } = await client.mutation({
      mutation: login,
      variables: {
        authCode: code,
      },
    });

    if (data) await clientAuth();
  }

  const clientAuth = async () => {
    const { data } = await client.query({
      query: getSelf,
    });

    self.value = data.self;
  }

  return {
    clientLogin,
    clientAuth,
    self,
  };
}