import React from "react";
import { Image, View, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  H3,
  Icon,
  Right,
  Label
} from "native-base";

import styles from "../css/style";


const launchscreenBg = require("../img/security-shield.jpg");
//const launchscreenLogo = require("../../img/logo.png");

export default class Home extends React.Component {


  render() {
    return (

      <Container style={{backgroundColor: "#2b4e95"}}>
        <StatusBar barStyle="light-content" />
        <Image source={launchscreenBg} style={styles.imageContainer} />

          <View style={styles.logoContainer}>

            <View style={styles.contentContainer} >
              <H3 style={styles.text}>Welcome to Inteligencia Security.</H3>
              <H3 style={styles.text}>Home of the Judgement Free Zone@</H3>
            </View>

          </View>

          <View style={styles.contentContainer}>

            <Button
              full
              primary
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Index")}
            >
            <Label style={styles.color_font}>Go To Events</Label>
            </Button>

          </View>
      </Container>


    );
  }
}
