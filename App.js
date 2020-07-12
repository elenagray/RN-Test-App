import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/ThirdPage';
import FourthPage from './screens/FourthPage';
import RootStackScreen from './screens/RootStackScreen';
import { View, ActivityIndicator } from 'react-native';

import {AuthContext} from './components/context';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#fff',
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fghk');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fghk');
      setIsLoading(false);
    }
  }));

  
  useEffect(() => {
    setTimeout(() =>
      {setIsLoading(false);
      }, 1000);
  }, []);
  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}w>
        <ActivityIndicator size = "large"/>
      </View>
    );
  }
  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        {userToken != null ? (
          <Stack.Navigator
            initialRouteName="FirstPage"
            screenOptions={{
              headerStyle: { backgroundColor: '#87B56A' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'normal' }
            }}>
            <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'IWEC Foundation' }}/>
          </Stack.Navigator>
          ) 
        :
        <RootStackScreen/>
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;