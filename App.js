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
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './navigation/BottomTabNav';
import {theme} from './common/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.colors.primay} />
        <BottomTabNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
