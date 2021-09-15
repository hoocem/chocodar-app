/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {StatusBar} from 'react-native';
import Home from './screens/Home';
import {theme} from './common/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={theme.colors.primay} />
      <Home />
    </QueryClientProvider>
  );
};

export default App;
