import axios from "axios";
import { DocumentNode, print } from "graphql";

const GraphQLUrl = process.env.VUE_APP_GRAPHQL_URL as string;

interface IGraphQLQuery {
  query: DocumentNode,
  variables?: Record<string, unknown>,
}

interface IGraphQLMutation {
  mutation: DocumentNode,
  variables?: Record<string, unknown>,
}

export const useGraphQL = (): { client: GraphQLClient; } => {
  const client = new GraphQLClient(GraphQLUrl);

  return {
    client,
  }
}

export class GraphQLClient {
  private graphQLUrl: string;

  constructor(graphQLUrl: string) {
    this.graphQLUrl = graphQLUrl;
  }

  public async query({ query, variables }: IGraphQLQuery): Promise<any> {
    try {
      const res = await axios({
        url: this.graphQLUrl,
        method: 'post',
        data: {
          query: print(query),
          variables,
        },
      });

      return res.data;
    } catch (error: any) {
      console.error(error.response.data)
      return null;
    }
  }

  public async mutation({ mutation, variables }: IGraphQLMutation): Promise<any> {
    try {
      const res = await axios({
        url: this.graphQLUrl,
        method: 'post',
        data: {
          query: print(mutation),
          variables,
        },
      });
      
      return res.data;
    } catch (error: any) {
      console.error(error.response.data)
      return null;
    }
  }
}