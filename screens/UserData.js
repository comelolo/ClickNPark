import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import { Header, Left } from 'native-base';
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import personalData from '../assets/UserData'
import PersonalDataComp from '../components/PersonalData'
import Icon from 'react-native-vector-icons/EvilIcons'


var orange = 'rgb(255, 158, 51)';
var bleu = 'rgb(100, 157, 253)';

export default class UserData extends React.Component {
    constructor() {
        super();
        this.state = {
            personalData: []
        };
    }
    
    // componentDidMount() {
    //     console.log('DidMount')
    // }

    render() {
        return(
        <ImageBackground source={require('../assets/images/myboat.jpg')} style={{ flex: 1 }}>
            <View style={styles.main}>       
                <View style={styles.header}>
                    <Icon name='navicon' color='white' size={32} style={styles.menuIcon} onPress={() => this.props.navigation.toggleDrawer()} />
                </View>

                <View style={styles.form_box}>
                    <View style={styles.title_box}>
                        <Text style={styles.title_1}>Mon Boat </Text>
                        <Text style={styles.title_2}>& Moi</Text>
                    </View>
                    <FlatList
                        data={personalData}
                        keyExtractor={(item) => item.email}
                        renderItem={({item}) => <PersonalDataComp userData={item}/>}
                    />
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
      alignItems: 'flex-start',
      justifyContent: 'space-between',
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
      flex: 0,
      flexDirection: 'row',
      alignSelf: 'center'
    },
    form_box: {
      backgroundColor: 'rgba(77, 77, 77, 0.8)',
      maxHeight: '80%',
      flex: 1,
      borderRadius: 100/4,
      paddingLeft : '7%',
      paddingRight : '10%',
      borderColor: 'rgb(17, 112, 217)',
      borderWidth: 2,
      marginTop: '5%',
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },    
  });
  