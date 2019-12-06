import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

// import HomeScreen from "./HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import PortScreen from "../screens/PortScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import Try from "../screens/Try";
import UserData from "../screens/UserData";
import OpenStreetMapScreen from '../screens/OpenStreetMapScreen';

import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    headerStyle: {
        backgroundColor: 'white',
    },
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
        // Home: { screen: HomeScreen },
        LoadingScreen: { screen: LoadingScreen },
        PortScreen: { screen: PortScreen },
        // SignUp: { screen: SignUpScreen },
        SignUp: { screen: Try },
        SignIn: { screen: SignInScreen },
        UserData: { screen: UserData },
        OpenStreetMap: { screen: OpenStreetMapScreen },
    },
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);