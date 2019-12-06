
import React from 'react'
import { StyleSheet, View, Text, FlatList, ImageBackground, Image } from 'react-native'
import PortTab from '../components/Port'
import portList from '../assets/PortData'
import axios from 'axios'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons'


const URL = 'http://10.0.2.2:8000';
var orange = 'rgb(255, 158, 51)';
var bleu = 'rgb(100, 157, 253)';


export default class PortScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        portsData: [],
        search: '',
    };
  }


  componentDidMount() {
    console.log('DidMount')
    axios.get(`${URL}/ports/`)
        .then( response => {
            console.log('request sent')
            console.log(response.data)
            this.setState({ portsData: response.data })
        })
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/perdrix.jpg')} position="absolute" style={{ flex: 1 }}>
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
              <View style={styles.title_box}>
                  <Text style={styles.title_1}>Les </Text>
                  <Text style={styles.title_2}>Ports</Text>
              </View>
              <SearchBar
                  placeholder="Rechercher un port"
                  onChangeText={(text) => this.setState({ search: text })}
                  platform='ios'
                  containerStyle={styles.search_bar}
              />
              <FlatList
                  data={portList}
                  keyExtractor={(item) => item.name}
                  renderItem={({item}) => <PortTab port={item}/>}
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
    justifyContent: 'space-between',
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
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20
  },
  search_bar: {
    backgroundColor: 'transparent',
  },
  title_box: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'center'
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
})
