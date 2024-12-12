import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import Routes from './Routes';
import HomeScreen from 'App/Screens/HomeScreen/HomeScreen';
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen';
const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer
      ref={navRef => {
        if (navRef != null) {
          AppNavRef = navRef;
        }
      }}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name={Routes.SplashScreen}>
          {() => <SplashScreen />}
        </Stack.Screen>
        <Stack.Screen name={Routes.HomeScreen}>
          {() => <HomeScreen />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export let AppNavRef: NavigationContainerRef<ReactNavigation.RootParamList>;

export default AppNavigation;
