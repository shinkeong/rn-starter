import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BoxScreen = () => {
	return(
		<View style={styles.parentStyle}>
			<Text style={styles.textOneStyle}>Child #1</Text>
			<Text style={styles.textTwoStyle}>Child #2</Text>
			<Text style={styles.textThreeStyle}>Child #3</Text>


			<View  style={styles.viewOneStyle}/>
			<View  style={styles.viewTwoStyle}/>
			<View  style={styles.viewThreeStyle}/>
		</View>
	)
}

const styles = StyleSheet.create({
	parentStyle: {
		borderWidth: 3,
		borderColor: 'black',
		//alignItems: "flex-start",
		height: 200,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	viewOneStyle: {
		height: 50,
		width: 50,
		backgroundColor: "red"
	},
	viewTwoStyle: {
		height: 50,
		width: 50,
		backgroundColor: "green",
		marginTop: 40
	},
	viewThreeStyle: {
		height: 50,
		width: 50,
		backgroundColor: "blue"
		
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: "red",
		//flex: 4,
		alignSelf: "flex-start",
		//position: "absolute",
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: "red",
		//top: 0, right: 0, left: 0, bottom: 0
		//same as below
		alignSelf: "center",
		...StyleSheet.absoluteFillObject
		//flex: 4
	},
	textThreeStyle: {
		borderWidth: 3,
		borderColor: "red",
		//flex: 2
	}
})

export default BoxScreen;