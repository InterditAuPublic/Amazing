import * as React from 'react';
import Splash from './src/screens/Splash';
import Presentation from './src/screens/Presentation';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import LavaScreen from './src/screens/Lava';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = React.useState(true);
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 2000})}>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <Splash {...props} setLoading={setLoading} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Home"
            component={Presentation}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Lava" component={LavaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
