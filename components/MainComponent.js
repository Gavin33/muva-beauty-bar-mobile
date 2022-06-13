import React, { Component } from "react";
import BookNow from "./BookNowComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Loading from "./LoadingComponent";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { View, StyleSheet, Platform, Image } from "react-native";
import { Icon, ThemeProvider } from "react-native-elements";
import Constants from "expo-constants";
import LOGO from "../shared/Logo";
import { fetchImages } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl.js";

const mapDispatchToProps = {
  fetchImages,
};

// temp styles?
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "black",
    fontSize: 24,
  },
});

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#f8f9fa",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#000000",
      },
      headerTitleAlign: "center",
      headerLeft: () => (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      /*       headerRight: () => (
        <Image
          source={require("./img/PressOnLineLogo1copy.png")}
          style={{ width: 100, flex: 1 }}
        />
      ), */
    }),
  }
);

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" type="font-awesome" size={24} color={tintColor} />
      ),
    },
  },
});

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 0,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
