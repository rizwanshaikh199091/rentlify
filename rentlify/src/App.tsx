import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-gesture-handler';
import {enableLayoutAnimations} from 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';

enableLayoutAnimations(true);

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
