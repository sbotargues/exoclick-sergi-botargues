// Import your DynamoDB helper functions here

export const resolvers = {
    Query: {
      getWebpage: async (_, { id }) => {
        // Fetch the webpage from DynamoDB using the provided id
      },
      listWebpages: async () => {
        // Fetch all webpages from DynamoDB
      },
    },
    Mutation: {
      createWebpage: async (_, args) => {
        // Insert the new webpage into DynamoDB using the provided arguments
      },
      updateWebpage: async (_, args) => {
        // Update the webpage in DynamoDB using the provided arguments
      },
      deleteWebpage: async (_, { id }) => {
        // Delete the webpage from DynamoDB using the provided id
      },
    },
  };
  