import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import Loading from "./LoadingComponent";
import NAILS from "../shared/Nails";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

class Home extends Component {
  // Index of Carousel
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this.renderNail = this.renderNail.bind(this);
  }
  renderNail({ item }) {
    return (
      <ImageBackground
        source={{ uri: item.src }}
        style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
      >
        <Text>{item.name}</Text>
        <Text>$?</Text>
      </ImageBackground>
    );
  }
  render() {
    return (
      <View>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={NAILS.filter((nails) => !nails.featured)}
          renderItem={this.renderNail}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
        />
        <ImageBackground
          source={{ uri: baseUrl + "./img/PressOnLineLogo1copy.png" }}
          style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, zIndex: 1 }}
        />
      </View>
    );
  }
}

export default Home;
