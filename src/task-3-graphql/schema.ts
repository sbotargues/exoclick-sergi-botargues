import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Webpage {
    id: ID!
    title: String
    description: String
    url: String!
    seo_keywords: [String]
    og_title: String
    og_description: String
    og_image: String
  }

  type Query {
    getWebpage(id: ID!): Webpage
    listWebpages: [Webpage]
  }

  type Mutation {
    createWebpage(
      title: String,
      description: String,
      url: String!,
      seo_keywords: [String],
      og_title: String,
      og_description: String,
      og_image: String
    ): Webpage
    updateWebpage(
      id: ID!,
      title: String,
      description: String,
      url: String!,
      seo_keywords: [String],
      og_title: String,
      og_description: String,
      og_image: String
    ): Webpage
    deleteWebpage(id: ID!): Webpage
  }
`;
