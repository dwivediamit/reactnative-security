// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

//  import getTheme from './native-base-theme/components';                                                               
//  export default class ThemeExample extends Component {                                                                
//  render() {                                                                                                           
//    return (                                                                                                           
//      <StyleProvider  style={getTheme()}>                                                                              
//        <Container>                                                                                                    
//          <Content>                                                                                                    
//            ...                                                                                                        
//          </Content>                                                                                                   
//        </Container>                                                                                                   
//      </StyleProvider>                                                                                                 
//    );                                                                                                                 
//  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from "react";
import App from "./assets/js/App";

export default class SecurityApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return <App />;
  }
}
