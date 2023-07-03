import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  ImageBackground,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import IMAGES from '../shared/images';
import Carousel from 'react-native-snap-carousel';
import { baseUrl } from '../shared/baseUrl';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const FEATURED_WIDTH = Math.round(SLIDER_WIDTH * 0.45);
const FEATURED_HEIGHT = Math.round((FEATURED_WIDTH * 3) / 4);

// list of featured items

const featuredArray = IMAGES.filter(
  (nails) => nails.featured && nails.featured != 'Logo'
);

const featured1 = [featuredArray[0], featuredArray[1]];
const featured2 = [featuredArray[2], featuredArray[3]];

// Nail element

class Nail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        source={this.props.src}
        style={{
          width: this.props.imageWidth,
          height: this.props.imageHeight,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingHorizontal: 10,
            paddingVertical: 5,
            width: Math.round(this.props.imageWidth * 0.9),
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {this.props.name}
          </Text>
          <Text style={{ color: 'white', textAlign: 'center' }}>$?</Text>
        </View>
      </ImageBackground>
    );
  }
}

class Home extends Component {
  // Index of Carousel
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this.renderNail = this.renderNail.bind(this);
    this.renderFeatured = this.renderFeatured.bind(this);
  }
  renderNail({ item }) {
    return (
      <Nail
        name={item.name}
        imageWidth={ITEM_WIDTH}
        imageHeight={ITEM_HEIGHT}
        src={item.src}
      />
    );
  }
  renderFeatured(featured) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}
      >
        {featured.map((item) => {
          return (
            <Nail
              key={item.id}
              name={item.name}
              imageWidth={FEATURED_WIDTH}
              imageHeight={FEATURED_HEIGHT}
              src={item.src}
            />
          );
        })}
      </View>
    );
  }
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: '#f7cbdc',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          Free Shipping on Domestic Orders $75+ | Get 15% Off With Code Muva15
        </Text>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={IMAGES.filter((nails) => !nails.featured)}
          renderItem={this.renderNail}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
        />
        <Text style={{ fontSize: 30 }}>Best Sellers</Text>
        {this.renderFeatured(featured1)}
        {this.renderFeatured(featured2)}
        {/* Why this is in this component is beyond me. But I'll probably use it somewhere. */}
        {/* <ImageBackground
          source={IMAGES[13].src}
          style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, zIndex: 1 }}
        /> */}
      </View>
    );
  }
}

export default Home;
