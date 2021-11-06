/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {QueryClientProvider, QueryClient} from 'react-query';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import HomeStackNav from './navigation/HomeStackNav';
import {theme} from './common/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <StatusBar backgroundColor={theme.colors.primay} />
          <HomeStackNav />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
