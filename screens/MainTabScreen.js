import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import InventoryDetails from './InventoryDetails';
import CameraScanner from './CameraScanner';
import SettingsScreen from './SettingsScreen';
import DownloadScreen from './Downloads';
import UploadScreen from './Upload';
import Warehouse from './Warehouse';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff" barStyle={{ backgroundColor: '#1E1E1E' }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#1E1E1E',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1E1E1E',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#1E1E1E',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: '#1E1E1E',
        tabBarIcon: ({color}) => (
          <Icon name="ios-settings-outline" color={color} size={26} />
        ),
      }}
    />    
    {/* <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      /> */}
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F69422',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#F69422"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name='Inventory'
      component={InventoryDetails}
    />
    <HomeStack.Screen
      name='Scanner'
      component={CameraScanner}
    />
    <HomeStack.Screen
      name='Settings'
      component={SettingsScreen}
    />
    <HomeStack.Screen
      name='Downloads'
      component={DownloadScreen}
    />
    <HomeStack.Screen
      name='warehouse'
      component={Warehouse}
    />
    <HomeStack.Screen
      name='Uploads'
      component={UploadScreen}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F69422',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#F69422"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
