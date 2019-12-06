
import React from 'react'
import { StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native'
import call from 'react-native-phone-call';
import Overlay from 'react-native-elements';

var orange = 'rgb(255, 158, 51)';


class Port extends React.Component {

  state = {
    isVisible: false,
  }

  SwitchIsVisible = () =>{
    if(this.state.isVisible == true)
    {
      this.setState({isVisible: false})
    }
    else
    {
      this.setState({isVisible: true})
    }
  }

  call = () => {
    const port = this.props.port 
    const args = {
      number: port.phone,
      prompt: false,
    };
    call(args).catch(console.error);
  }
 
  render() {
    const port = this.props.port
    return (
      <View>
        <View>
          <TouchableOpacity onPress={this.SwitchIsVisible} style={styles.port_container} >
            <Text style={styles.text} numberOfLines={1}>{port.name} - {port.city}</Text>
            <Text style={styles.text}>{port.phone}</Text>
          </TouchableOpacity>
        </View>

        {
          
          this.state.isVisible && (
            <View style={styles.frame}>
              <Text style={styles.text}>Détails... - Carte </Text>

            </View>
          )
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  port_container: {
    marginTop: '5%',
    flex: 1,
    backgroundColor: 'rgba(115, 157, 244, 0.8)',
    textAlign: 'center'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'white'
  },
  frame: {
    backgroundColor: orange,
    // windowBackgroundColor='rgba(255, 255, 255, 0.5)',
    // overlayBackgroundColor='red'
  },
})

export default Port