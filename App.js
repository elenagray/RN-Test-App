import 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#d2b48c',
        },
        labelStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 12
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 4,
        },
      }}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: 'Chambers',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Master Class',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
        <Tab.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          tabBarLabel: 'Mentoring',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  />
        <Tab.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          tabBarLabel: 'More',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#5c4033' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'normal' }
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'IWEC Foundation' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;