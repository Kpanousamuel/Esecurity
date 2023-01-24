import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PassVerify from './Page/PassVerify';

import guestDetails from './Page/guestDetails';
import Login3 from './Page/Login3';
import SignIn from './Page/signIn';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="PassVerify" component={PassVerify} />
      <Stack.Screen name="guestDetails" component={guestDetails} />
      <Stack.Screen name="Login3" component={Login3} />
      {/* <Stack.Screen name="Page" component={Page} /> */}
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
