import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Button } from 'native-base';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons'

var orange = 'rgb(255, 158, 51)';
var bleu = 'rgb(100, 157, 253)';


export default class SignInScreen extends React.Component {
  // submitCo = async () => {
  //   console.log('je suis connecté')
  // }

  // submitIn = async () => {
  //   console.log('Je m inscris')
  // }
  
  
  render() {
    return (
    <ImageBackground source={require('../assets/images/couv.jpg')} style={{ flex: 1 }}>
      <View style={styles.main}>

        <View style={styles.header}>
            <View>
              <Icon name='navicon' color='white' size={32} style={styles.menuIcon} onPress={() => this.props.navigation.toggleDrawer()} />
            </View>  
            <View style={styles.title_box}>
              <Text style={styles.title_1}>CLICK'N </Text>
              <Text style={styles.title_2}>PARK</Text>
            </View>
        </View>

       
        <View style={styles.form_box}>
            <Image source={require('../assets/images/logo_transp.png')} style={styles.logo}/>
            <Form style={styles.form_container}>
              <Item>
                <Input style={{fontSize: 15}} placeholder="Email..."/>
              </Item>
              <Item>
                <Input style={{fontSize: 15}} placeholder="Password..."/>
              </Item>
              <TouchableOpacity><Text>Forgot password ?</Text></TouchableOpacity>
            </Form>
            
            <Button 
                warning 
                onPress={this.submitCo} 
                style={styles.button}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}> 
                    Connexion 
                </Text>
            </Button>   
            <Divider style={{marginTop: '10%', borderColor: 'rgb(17, 112, 217)', backgroundColor: 'rgb(17, 112, 217)', borderWidth: 2 }} />
            <Divider style={{marginTop: '4%', borderColor: 'rgb(17, 112, 217)', backgroundColor: 'rgb(17, 112, 217)', borderWidth: 2 }} />
            <Divider style={{marginTop: '4%', borderColor: 'rgb(17, 112, 217)', backgroundColor: 'rgb(17, 112, 217)', borderWidth: 2 }} />
            <Button 
                warning 
                onPress={() => this.props.navigation.navigate('SignUp')} 
                style={styles.button}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}> 
                    Inscription 
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
    justifyContent: 'space-between'
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: '8%',
  },
  button: {
    color: 'rgb(205, 122, 20)',
    alignSelf : 'center',
    textAlign: 'center',
    paddingLeft : 20,
    paddingRight : 20,
    marginTop: '8%'
  },
  title_box: {
    flexDirection: 'row',
    marginLeft: '25%',
    marginTop: 7
  },
  form_box: {
    backgroundColor: 'rgba(228, 228, 228, 0.8)',
    maxHeight: '80%',
    alignSelf: 'flex-end',
    borderRadius: 100/4,
    paddingHorizontal : '7%',
    paddingBottom : '3%',
    borderColor: 'rgb(17, 112, 217)',
    borderWidth: 2,
    marginBottom: '10%',
    marginTop: '5%',
    marginHorizontal: '5%'
  },
  header: {
    flexDirection: 'row',
  },
  title_1: {
    color: orange,
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '8%'
  },
  title_2: {
    color: bleu,
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '8%'
  },
  menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	},

});
