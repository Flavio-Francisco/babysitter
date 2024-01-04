
import { createStackNavigator } from "@react-navigation/stack";

import Add from "../screens/Add.tsx/index.tsx";
import Home from "../screens/home/index.tsx";
import Update from "../screens/update/index.tsx";
import Drawer from "./drawer.routes.tsx";
import React from "react";
import Register from "../screens/register/index.tsx";



export default function Stack() {

    const { Navigator, Screen } = createStackNavigator();
    return (
        <Navigator

        >
            <Screen
                name="Drewer"
                component={Drawer}
             

            />
            <Screen
                name="Home"
                component={Home}
              

            />
            <Screen
                name="Nova Reseva"
                component={Add}
                options={{
                    headerShown: false

                }}
            />
            <Screen
                name="Atalizar Agendamento "
                component={Update}
             

            />
            <Screen
                name="Register"
                component={Register}
              

            />
        </Navigator>
    )
}