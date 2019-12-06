import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";

//library imports
import { Icon, Container, Header, Content, Left } from 'native-base'

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Text>Home Screen</Text>
          <View style={styles.main_container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Loading Screen"
                onPress={() => this.props.navigation.navigate('Loading')}
                />
                <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                title="Go to port"
                onPress={() => this.props.navigation.navigate('Port')}
                />
                <Button
                title="Go to Sign up screen"
                onPress={() => this.props.navigation.navigate('SignUp')}
                />
                <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
                />
                <Button
                title="Go to TRY"
                onPress={() => this.props.navigation.navigate('Try')}
                />
                <Button
                title="Go to user data"
                onPress={() => this.props.navigation.navigate('UserData')}
                />
                <Button
                title="Go to Sign in screen"
                onPress={() => this.props.navigation.navigate('SignIn')}
                />
                </View>
            </View>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;
