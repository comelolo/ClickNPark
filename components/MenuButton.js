import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

export default class MenuButton extends React.Component {
	render() {
		return(
			<Icon
				name='navicon'
				color='white'
				size={32}
				style={styles.menuIcon}
				onPress={() => this.props.navigation.toggleDrawer()}
			/>
		);
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	}
})