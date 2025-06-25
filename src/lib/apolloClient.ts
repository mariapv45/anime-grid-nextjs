import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ANI_LIST_URL } from './constants';

export const client = new ApolloClient({
  uri: ANI_LIST_URL,
  cache: new InMemoryCache(),
});