import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { AuthContextProvider } from './src/context/Agenda';
import React from 'react';


export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
    
  );
}


