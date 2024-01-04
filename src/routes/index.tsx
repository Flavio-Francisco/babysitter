import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./drawer.routes";
import Stack from "./stak.routes";
import React from "react";
import Tab from "./tab.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Routes() {
    return (

        <NavigationContainer >
            <Tab />
        </NavigationContainer>
    )
}