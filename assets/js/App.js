import React from "react";

import { Platform } from "react-native";
import { Root, StyleProvider } from "native-base";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome"

import Home from "../view/Home";
import Index from "../view/Index";

import getTheme from '../../native-base-theme/components';
import material from "../../native-base-theme/variables/material";
import platform from "../../native-base-theme/variables/platform";


import commonColor from '../../native-base-theme/variables/commonColor';

const AppNavigator = StackNavigator(
    {

        Home: { screen: Home
         //    navigationOptions: {
         //      headerLeft: null
         // },
        },
        Index: { screen: Index },
    },



    {
        initialRouteName: "Home",
        headerMode: "none",
    }
);

export default () =>

    <Root>
        <StyleProvider style={getTheme(commonColor)}>
            <AppNavigator />
        </StyleProvider>
    </Root>;