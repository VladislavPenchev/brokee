import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PostsList from './components/tests/TestList';
import './index.css';

const client = new ApolloClient({
  uri: 'https://graph.brokee.io/v1/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PostsList />
    </ApolloProvider>
  </React.StrictMode>
);
