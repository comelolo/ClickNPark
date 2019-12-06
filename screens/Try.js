import React from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, Image, View } from 'react-native';
import { Form, Item, Input, Button, Header, Left } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons'
import axios from 'axios';

const URL = 'http://10.0.2.2:8000';
var orange = 'rgb(255, 158, 51)';
var bleu = 'rgb(100, 157, 253)';


export default class Try extends React.Component {
  
  state = {
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    passwordC: ''
  }

  submit = async () => {
    var data = {
      'email': this.state.email,
      'firstname': this.state.firstname,
      'password': this.state.password,
      'lastname': this.state.lastname,
    }
    console.log(data)
    axios.post(`${URL}/users/`, data)
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/rope.jpg')} position="absolute" style={{ flex: 1 }}>
        <View style={styles.main}>
            <View style={styles.header}>
                <View>
                  <Icon name='navicon' color='white' size={32} style={styles.menuIcon} onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
                <View>
                  <Image source={require('../assets/images/logo_transp.png')} style={styles.logo}/>
                </View>
            </View>
            
            <View style={styles.form_box}>
              <Text style={styles.title}>Get Started</Text>
                  <TextInput onChangeText={(text) => this.setState({ lastname: text })} 
                              placeholder="Nom..."
                              style={styles.text_input}
                              />
                  <TextInput onChangeText={(text) => this.setState({ firstname: text })} 
                              placeholder="Prénom..."
                              style={styles.text_input}
                              />
                  <TextInput onChangeText={(text) => this.setState({ email: text })} 
                              placeholder="Email..."
                              style={styles.text_input}
                              />
                  <TextInput onChangeText={(text) => this.setState({ password: text })} 
                              placeholder="Mot de passe..."
                              style={styles.text_input}
                              />
                  <TextInput onChangeText={(text) => this.setState({ passwordC: text })} 
                              placeholder="Confirmation mot de passe..."
                              style={styles.text_input}
                              />
              <Button 
                warning 
                onPress={this.submit} 
                style={styles.button}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> 
                    J'embarque 
                </Text>
              </Button>
            </View>
        </View>  
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20
  },
  form_box: {
    backgroundColor: 'rgba(228, 228, 228, 0.8)',
    maxHeight: '80%',
    flex: 1,
    borderRadius: 100/4,
    paddingLeft : '7%',
    paddingRight : '10%',
    borderColor: 'rgb(17, 112, 217)',
    borderWidth: 2,
    marginTop: '5%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'rgb(205, 122, 20)',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    //fontFamily: 'Arial',
    textAlign: 'center'
    // marginTop: 20
  },
  button: {
    color: orange,
    alignSelf : 'center',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  text_input: {
    borderColor: orange,
    borderWidth: 2,
    borderRadius: 50/5,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 17,

    //fontFamily: 'Arial'
  },
  menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	},

})
