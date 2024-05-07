import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React, { useEffect, useState, useRef } from "react";
import {
  Platform,
  BackHandler,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  StyleSheet
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Slots from './Screens/Slots';
import Table from './Screens/Table';
import Promotions from './Screens/Promotions';
import Live from './Screens/Live';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer style={styles.topNav} >
      <Tab.Navigator  
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderColor: 'black'
      },  
     
    }}>
      <Tab.Screen name="Home" 
        options={{
            unmountOnBlur: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            title: 'Home',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/home.png')} 
                />
              );
            }}}
            component={Home} />
      <Tab.Screen name="Slots" 
        options={{
            unmountOnBlur: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            title: 'Slots',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/slots.png')} 
                />
              );
            }}}
            component={Slots} />
             <Tab.Screen name="Live" 
        options={{
            unmountOnBlur: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            title: 'Live',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/live.png')} 
                />
              );
            }}}
            component={Live} />
      <Tab.Screen name="Table" 
        options={{
            unmountOnBlur: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            title: 'Table',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/table.png')} 
                />
              );
            }}}
            component={Table} />
      <Tab.Screen name="Promotions" 
        options={{
            unmountOnBlur: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            title: 'Promotions',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/promotions.png')} 
                />
              );
            }}}
            component={Promotions} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  topNav: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'black'

  },
});

