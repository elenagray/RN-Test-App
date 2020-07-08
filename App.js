import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import RootStackScreen from './screens/RootStackScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#000',
        activeBackgroundColor: '#87B56A',
        inactiveTintColor: '#87B56A',
        labelStyle: {
          textAlign: 'center',
          textAlignVertical: 'center',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          fontSize: 15
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
          tabBarLabel: 'Master Class'
        }} />
        <Tab.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          tabBarLabel: 'Mentoring',
        }} 
         />
        <Tab.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          tabBarLabel: 'More',
        }}  />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#87B56A' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'normal' }
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'IWEC Foundation' }}/>
      </Stack.Navigator> */}
    
    </NavigationContainer>
  );
}

export default App;