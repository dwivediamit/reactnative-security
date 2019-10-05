import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Segment,
  List,
  ListItem,
  Thumbnail,
} from "native-base";

import styles from "../css/style";


const pratik = require("../img/pratik.png");
const sanket = require("../img/sanket.png");

const datas = [
  {
    img: pratik,
    text: "C 681186 - Ignition turned on",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "M 791129 - Speed driving",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: pratik,
    text: "U 070112 - Ignition turned on",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: pratik,
    text: "B 414178 - SOS Button was pressed",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "U 070112 - Seatbelt fastened detected",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "N 664146 - Exited a geofence: Burj Khalifa",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "K 124888 - Entered a geofence: Dubai Mall",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: pratik,
    text: "C 681186 - Ignition turned on",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "M 791129 - Speed driving",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: pratik,
    text: "U 070112 - Ignition turned on",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: pratik,
    text: "B 414178 - SOS Button was pressed",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "U 070112 - Seatbelt fastened detected",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "N 664146 - Exited a geofence: Burj Khalifa",
    time: "11:30:44, 24 July 2017"
  },
  {
    img: sanket,
    text: "K 124888 - Entered a geofence: Dubai Mall",
    time: "11:30:44, 24 July 2017"
  }
];

class SegmentNB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 2
    };
  }

  render() {
    return (
      <Container>
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>All</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Crucial</Text>
          </Button>
        </Segment>

        <Content>
          {this.state.seg === 1 &&
            
          <List 
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar style={{ marginLeft: 0 }}>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text note>{data.time}</Text>
                </Body>
              </ListItem>}
          />

          }
          {this.state.seg === 2 &&
            
            <List 
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar style={{ marginLeft: 0 }}>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text note>{data.time}</Text>
                </Body>
              </ListItem>}
          />

          }
        </Content>
      </Container>
    );
  }
}

export default SegmentNB;
