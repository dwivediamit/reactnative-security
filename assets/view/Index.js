import React, { Component } from "react";

import Dashboard from "./Dashboard.js";
import Vehicles from "./Vehicles.js";
import AllEvents from "./AllEvents.js";
import Preferences from "./Preferences.js";

import { TabNavigator } from "react-navigation";

import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

import styles from "../css/style";

export default (MainScreenNavigator = TabNavigator(
  { 
    Dashboard: { screen: Dashboard },
    Vehicles: { screen: Vehicles },
    AllEvents: { screen: AllEvents },
    Preferences: { screen: Preferences }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (



        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Dashboard")}
            >
              <Icon name="menu" />
              <Text>Dashboard</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Vehicles")}
            >
              <Icon name="cart" />
              <Text>Vehicles</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("AllEvents")}
            >
              <Icon name="notifications" />
              <Text>All Events</Text>
            </Button>

            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Preferences")}
            >
              <Icon name="settings" />
              <Text>Preferences</Text>
            </Button>
          
          </FooterTab>
        </Footer>
      );
    }
  }
));
