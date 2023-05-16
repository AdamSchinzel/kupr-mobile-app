import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { ADMIN_SECRET } from "@env";

import { GRAPHQL_ENDPOINT } from "../../config/constants";

const errorLink = onError(({ graphQLErrors, networkError, operation, response }) => {
  if (networkError) {
    console.error(networkError);
  }
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.error(
        "GQL ERROR | Operation:",
        operation.operationName,
        "| Variables:",
        operation.variables,
        "| Error response:",
        err
      );
      if (err?.extensions?.code === "invalid-jwt" || err?.extensions?.exception?.status === 403) {
        console.error("Invalid JWT");
        if (response) response.errors = [];
        return;
      }
    }
  }
});

const authLink = setContext(async (_, { headers }) => {
  const authHeaders = {
    "x-hasura-admin-secret": ADMIN_SECRET,
  };
  return {
    headers: {
      ...headers,
      ...authHeaders,
    },
  };
});

export const client = new ApolloClient({
  link: from([
    errorLink,
    authLink,
    new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
  ]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "none",
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "cache-and-network",
    },
    query: {
      errorPolicy: "none",
      notifyOnNetworkStatusChange: true,
    },
    mutate: {
      errorPolicy: "none",
    },
  },
});
