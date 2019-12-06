import React from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, Image, View } from 'react-native';

export default class SignUpScreen extends React.Component {

  state = {
    name: '',
    firstname: '',
    email: '',
    password: ''
  }

  render() {
    return (
        <View style={styles.frame_container}>
            <ImageBackground source={require('../assets/images/rope.jpg')} style={styles.image_background}>
                <Image source={require('../assets/images/logo_transp.png')} style={styles.logo}/>
            </ImageBackground>
            <View style={styles.form_container}>
                <Text style={styles.title}>INSCRIPTION</Text>
                <View style={styles.main_container}>
                  <View style={styles.label_container}>
                    <Text style={styles.label}>Nom :</Text>
                    <Text style={styles.label}>Prénom :</Text>
                    <Text style={styles.label}>Email :</Text>
                    <Text style={styles.label}>Téléphone :</Text>
                    <Text style={styles.label}>Adresse :</Text>
                  </View>
                  <View style={styles.input_container}>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                  </View>
                </View>
                
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  form_container: {
    width: '100%',
    backgroundColor: 'rgba(193, 200, 204, 0.5)',
    flex: 1
  },
  label_container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },
  input_container: {
    marginLeft: 5,
    flex: 2,
    flexDirection: 'column'
  },
  frame_container: {
      flex: 1
  },
  main_container: {
    flex: 1,
    flexDirection: 'row'
  },
  image_background: {
    flex: 0,
    resizeMode: 'stretch'
    //right: 200
    //marginBottom: 200
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'auto',
    marginTop: 10
  },
  title_box: {
    backgroundColor: 'rgba(193, 200, 204, 0.8)',
    width: '100%',
    height: '30%',
    marginTop: '15%'
  },
  input: {
      //slefAlign: "center",
      backgroundColor: "rgb(222, 222, 222)",
      borderColor: "rgb(238, 92, 4)",
      height: 40,
      marginTop: 20
  },
  title: {
    color: 'rgb(205, 122, 20)',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: 20
  },
  label: {
    fontSize: 15,
    fontFamily: 'Arial'
  }
});
