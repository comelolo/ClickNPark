import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		);
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.header}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/images/captain.jpg')} />
							</View>
							<View style={styles.profileText}>
								<Text style={styles.name}>Come L'Ollivier</Text>
							</View>
					</View>
					<View style={styles.bottomLinks}>
						{/* {this.navLink('Home', 'Home')} */}
						{this.navLink('LoadingScreen', 'Loading Screen')}
						{this.navLink('SignIn', 'Connection')}
                        {this.navLink('SignUp', 'Inscription')}
						{this.navLink('UserData', 'Mes infos')}
						{this.navLink('PortScreen', 'Les Ports')}
						{this.navLink('', 'Map')}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
	},
	scroller: {
		flex: 1,
	},
	profileText: {
        flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
        borderRadius: 50,
        borderColor: 'rgb(255, 158, 51)',
        borderWidth: 2,
	},
	header:{
		height: 160,
        backgroundColor: 'rgb(54, 162, 250)',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
	}
})