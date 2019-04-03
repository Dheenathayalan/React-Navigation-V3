/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Screen!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{ height: 100, width: 1000 }} />
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Feed!</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile!</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings!</Text>
      </View>
    );
  }
}

const HomeTabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  Settings
}, {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      }
    },
    tabBarOptions: {
      style: {
        paddingBottom: 15
      },
    },
  });

const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: HomeTabNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon name="md-menu" style={{ paddingLeft: 10 }} size={30} onPress={() => navigation.openDrawer()} />
        )
      }
    }
  });

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Home: {
    screen: AppDrawerNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
