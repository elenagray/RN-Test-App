import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen'
import SignInScren from './SignInScreen'
import SignUpScreen from './SignUpScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode = 'none'>
        <RootStack.Screen name = "SplashScreen" component = {SplashScreen}/>
        <RootStack.Screen name = "SignInScreen" component = {SignInScren}/>
        <RootStack.Screen name = "SignUpScreen" component = {SignUpScreen}/>

    </RootStack.Navigator>
    );

export default RootStackScreen;