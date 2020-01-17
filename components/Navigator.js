import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenOne from './ScreenOne'
import ScreenTwo from './ScreenTwo'


const RootStack = createStackNavigator({
  screenUno: ScreenOne,
  screenDos: ScreenTwo,
});

export default createAppContainer(RootStack);
