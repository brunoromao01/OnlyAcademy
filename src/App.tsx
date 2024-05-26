import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './views/Profile';
import Feed from './views/Feed';
import Payment from './views/Payment';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Profile" component={Profile} />
					<Stack.Screen name="Feed" component={Feed} />
					<Stack.Screen name="Payment" component={Payment} />
				</Stack.Navigator>
			</NavigationContainer>

		</>
	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

// export default App;
