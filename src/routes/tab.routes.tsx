
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import Add from "../screens/Add.tsx/index.tsx";
import Home from "../screens/home/index.tsx";
import { thema } from "../../thema.ts";

import Update from "../screens/update/index.tsx";
import React from "react";
import Stack from "./stak.routes.tsx";
import Register from "../screens/register/index.tsx";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";





export default function Tab() {

    const { Navigator, Screen } = createBottomTabNavigator();
    return (

        <Navigator

            screenOptions={{
                headerShown: false,
                
                tabBarStyle: {
                    height: 60
                },
                tabBarIconStyle:{

                }
                
            }}

          
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:({color,focused})=>{
                        if (focused) {
                            return (
                                <>
                                <Text style={{color:thema.colors.violeta, fontSize:10}}>Agendamentos</Text>
                                </>
                            )
                        } else {
                            return (
                                <>
                              <Text  style={{color:thema.colors.pink , fontSize:12}}>Agendamentos</Text>
                                </>
                            )
                        }
                    },
                    tabBarIcon: ({ size, color,focused }) => <Feather name="home" size={size} color={ focused? thema.colors.violeta:thema.colors.pink} />,
                    tabBarLabelStyle: {
                        color: thema.colors.pink,
                        elevation:5

                    }

                }}

            />
            <Screen
                name="Nova Reseva"
                component={Add}
                options={{
                    tabBarLabel:({color,focused})=>{
                        if (focused) {
                            return (
                                <>
                                <Text style={{color:thema.colors.violeta, fontSize:10}}>Nova Reserva</Text>
                                </>
                            )
                        } else {
                            return (
                                <>
                              <Text  style={{color:thema.colors.pink , fontSize:12}}>Nova reserva</Text>
                                </>
                            )
                        }
                    },
                    tabBarIcon: ({ size, color,focused }) => <Feather name="save" size={size} color={ focused? thema.colors.violeta:thema.colors.pink} />,
                    tabBarLabelStyle: {
                        color: thema.colors.pink
                    }

                }}
            />
            <Screen
                name="Update"
                component={Update}
                options={{
                    tabBarLabel:({color,focused})=>{
                        if (focused) {
                            return (
                                <>
                                <Text style={{color:thema.colors.violeta, fontSize:10}}>Foto</Text>
                                </>
                            )
                        } else {
                            return (
                                <>
                              <Text  style={{color:thema.colors.pink , fontSize:12}}>Foto</Text>
                                </>
                            )
                        }
                    },
                    tabBarIcon: ({ size, color,focused }) => <MaterialIcons name="add-a-photo" size={size} color={ focused? thema.colors.violeta:thema.colors.pink} />,
                    tabBarLabelStyle: {
                        color: thema.colors.pink
                    }

                }}

            />
            <Screen
                name="Register"
                component={Register}
                options={{
                    tabBarLabel:({color,focused})=>{
                        if (focused) {
                            return (
                                <>
                                <Text style={{color:thema.colors.violeta, fontSize:10}}>Crianças</Text>
                                </>
                            )
                        } else {
                            return (
                                <>
                              <Text  style={{color:thema.colors.pink , fontSize:12}}>Crianças</Text>
                                </>
                            )
                        }
                    },
                    tabBarIcon: ({ size, color,focused }) => <Feather name="smile" size={size} color={ focused? thema.colors.violeta:thema.colors.pink} />,
                    tabBarLabelStyle: {
                        color: thema.colors.pink
                    }

                }}

            />


        </Navigator>

    )
}