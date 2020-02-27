import React, { useReducer } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const CounterScreen = () => {

	const reducer = (state, action) => {

		switch(action.type) {
			case "change_increase":
				return {...state, counter: state.counter + action.payload};
			case "change_decrease":
				return {...state, counter: state.counter - action.payload};
			default:
				return state
		}

	}
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	const { counter } = state;

return (
	 <View>
	 	<Button title="Increase" onPress={() => {
	 		dispatch({ type: "change_increase", payload: 1})
	 		//setCounter(counter + 1)
	 	}}
	 	/>
	 	<Button title="Decrease" onPress={() => {
	 		dispatch({ type: "change_decrease", payload: 1})
	 		//setCounter(counter - 1);
	 	}}
	 	/>
		<Text>Current Count: {counter}</Text>

	 </View>
	)
}

const styles = StyleSheet.create({
	textStyles: {

	}
})

export default CounterScreen;