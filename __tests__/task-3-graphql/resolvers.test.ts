import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from '../task-3-graphql/schema';
import { resolvers } from '../task-3-graphql/resolvers';

// This is the server we'll be testing
const server = new ApolloServer({ typeDefs, resolvers });

// Create a test client that you can use to execute queries/mutations
const { query, mutate } = createTestClient(server);

describe('Queries', () => {
  it('fetches a single webpage', async () => {
    // write your test here
    const GET_WEBPAGE = gql`
      query GetWebpage($id: ID!) {
        getWebpage(id: $id) {
          id
          title
          url
        }
      }
    `;

    const res = await query({ query: GET_WEBPAGE, variables: { id: '1' } });
    expect(res).toMatchSnapshot();
  });

  // Similarly, you can write test for listWebpages
});

describe('Mutations', () => {
  it('creates a webpage', async () => {
    // write your test here
    const CREATE_WEBPAGE = gql`
      mutation CreateWebpage($title: String!, $url: String!) {
        createWebpage(title: $title, url: $url) {
          id
          title
          url
        }
      }
    `;

    const res = await mutate({ mutation: CREATE_WEBPAGE, variables: { title: 'Test title', url: 'http://testurl.com' } });
    expect(res).toMatchSnapshot();
  });

  // Similarly, you can write tests for updateWebpage and deleteWebpage
});
