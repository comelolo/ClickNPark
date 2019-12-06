import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button, Header, Left } from 'native-base'
//import CustomHeader from './components/CustomHeader'

class SettingsScreen extends Component {
    /*
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('./assets/images/logo_transp.png')}
                style={[styles.icon]}
            />
    })
    */

    render() {
        return (
            <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Text>Settings Screen</Text>
        </Content>
      </Container>
        )
    }

}

export default SettingsScreen

/*
const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})
*/