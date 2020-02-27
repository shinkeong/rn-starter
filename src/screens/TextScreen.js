import React, { useState} from 'react';
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';

const TextScreen = () => {

	const [password, setPassword] = useState("");
	return (
		<View>
		    <Text>Enter Password:</Text>
			<TextInput 
				style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length < 4 
				? <Text>Password must be at least 4 characters</Text>
				: null
			}
		</View>
	)
}

const styles = StyleSheet.create({
	inputStyle: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
})

export default TextScreen;