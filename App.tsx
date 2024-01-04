//import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { AuthContextProvider } from './src/context/Agenda';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Tab from "./src/routes/tab.routes";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <GestureHandlerRootView style={{height:'100%'}}>

      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>

    </GestureHandlerRootView>
  );
}


