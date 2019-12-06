import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card, CardItem, Body, Button } from 'native-base'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/EvilIcons'


var orange = 'rgb(255, 158, 51)';


class PersonalData extends React.Component {
  render() {
    const userData = this.props.userData
    return (
        <View style={styles.main_container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.titles}>Mon navire</Text>
                    <Icon name='pencil' size={35} color={orange}></Icon>
                </View>
                <Divider style={{borderColor:orange, borderWidth: 1 }}/>
                <View style={styles.body}>
                    <Text style={styles.text} numberOfLines={1}>Nom : {userData.boat.name}</Text>
                    <Text style={styles.text} numberOfLines={1}>Modèle : {userData.boat.model}</Text>
                    <Text style={styles.text} numberOfLines={1}>Longueur : {userData.boat.length}m - Largeur : {userData.boat.width}m</Text>
                    <Text style={styles.text} numberOfLines={1}>Tirant d'eau : {userData.boat.draught}m</Text>
                </View>
            </View>
            <Divider style={{
                        marginTop: '4%', 
                        borderColor: 'rgb(159, 209, 255)', 
                        backgroundColor: 'rgb(17, 112, 217)', 
                        borderWidth: 2 
                        }} 
            />
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.titles}>Le Capitaine</Text>
                    <Icon name='pencil' size={35} color={orange} alignSelf='flex-end'></Icon>
                </View>
                <Divider style={{borderColor: orange, borderWidth: 1 }}/>
                <View style={styles.body}>
                    <Text style={styles.text} numberOfLines={1}>{userData.firstname} {userData.lastname}</Text>
                    <Text style={styles.text} numberOfLines={1}>{userData.email}</Text>
                    <Text style={styles.text} numberOfLines={1}>{userData.phone}</Text>
                </View>
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text} numberOfLines={1}>Mes infos bancaires :</Text>
                    <View style={styles.header}>
                        <Icon name='credit-card' borderWidth={1} size={90} color={orange} alignSelf='flex-end'></Icon>
                        <View style={styles.body}>
                            <Text style={styles.text} numberOfLines={1}>{userData.card_number}</Text>
                            <Text style={styles.text} numberOfLines={1}>{userData.exp_date}</Text>
                            <Text style={styles.text} numberOfLines={1}>{userData.crypto}</Text>
                        </View>
                    </View>  
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 10,
    flex: 1,
    textAlign: 'center'
  },
  card: {
    marginHorizontal: '8%',
    marginVertical: '6%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    marginHorizontal: '5%',
    marginTop:'4%',
    flexDirection: 'column'
  },
  titles: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      color: orange
  },
  text: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      color: 'white'
  }
})

export default PersonalData