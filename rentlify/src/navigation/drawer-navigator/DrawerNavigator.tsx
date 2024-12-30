import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigation';

const App = () => {
  const Stack = createNativeStackNavigator<TMainNavigatorParams>();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
