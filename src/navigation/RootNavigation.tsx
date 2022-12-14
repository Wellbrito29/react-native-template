import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/Login';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName={RouteNames.LoginScreen}>
      <Stack.Screen
        name={RouteNames.LoginScreen}
        options={{title: 'Features List'}}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
