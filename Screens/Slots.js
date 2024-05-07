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
  StyleSheet, ActivityIndicator
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Slots() {


  const BACKGROUND_COLOR = "#292929";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const ANDROID_BAR_HEIGHT = Platform.OS === "android" ? Constants.statusBarHeight : 0;

const WEBVIEW = useRef()

const [loading, setLoading] = useState(true)
const [backButtonEnabled, setBackButtonEnabled] = useState(false)
const [isConnected, setConnected] = useState(true)

// Webview content loaded
function webViewLoaded() {
  setLoading(false)
};

// Webview navigation state change
function onNavigationStateChange(navState) {
  console.log(navState)
  setBackButtonEnabled(navState.canGoBack)
};

useEffect(() => {
  // Handle back event
  function backHandler() {
    if (backButtonEnabled) {
      WEBVIEW.current.goBack();
      return true;
    }
  };

  // Subscribe to back state vent
  BackHandler.addEventListener("hardwareBackPress", backHandler);

  // Unsubscribe
  return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
}, [backButtonEnabled])

useEffect(() => {
  // Subscribe for net state
  const netInfroSubscribe = NetInfo.addEventListener((state) => {
    setConnected(state.isConnected)
    if (!state.isConnected) {
      alert("No connection");
    }
  });

  // Clean up
  return netInfroSubscribe
}, [])

  return (
    <>
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <View
        style={{
          height: ANDROID_BAR_HEIGHT,
          backgroundColor: BACKGROUND_COLOR,
        }}
      ></View>
      {(loading || !isConnected) && (
        <View
          style={{
            backgroundColor: BACKGROUND_COLOR,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT + ANDROID_BAR_HEIGHT,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
     <ActivityIndicator />
        </View>
      )}
   
      {isConnected && (
      
       
        <WebView
          onLoad={webViewLoaded}
          javaScriptEnabled={true}
          style={{opacity: 0.99}}
          domStorageEnabled={true}
          startInLoadingState={true}
          // injectedJavaScript=
          ref={WEBVIEW}
          useWebKit={true}
          onNavigationStateChange={onNavigationStateChange}
          source={{ uri: "https://pasino.ch/fr/category/slots" }}
        />
        
      )}
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

