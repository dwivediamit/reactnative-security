const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {

  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

  },

  text: {
    color: "#fff",
    alignSelf: 'center',
    fontSize: 16,
  },

  contentContainer: {
    alignItems: "center",
    marginBottom: 50,
    backgroundColor: "transparent",
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  logo_inner: {
    height: 120,
    marginBottom: 10,
  },

  logo: {
    position: "absolute",
    //left: Platform.OS === "android" ? 40 : 50,
    //top: Platform.OS === "android" ? 35 : 60,
    width: 120,
    height: 120,
    alignSelf: 'center',
  },

  centerText: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },

  color_font: {
    color: '#ffffff',
    fontSize: 15,
  },




};
