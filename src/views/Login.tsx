import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function Login({ navigation }) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <ImageBackground source={require('../assets/logo.png')} style={{ width: '100%', height: '110%', flexDirection: 'row', justifyContent: 'space-between', }} />

            </View>
            <View style={styles.containerBottom}>
                <TextInput style={[styles.input, { marginBottom: 10 }]}
                    value={login}
                    onChangeText={text => setLogin(text)}
                    placeholder='Login'
                    placeholderTextColor={'black'}
                    mode='flat'
                    label='Login'

                />
                <TextInput style={[styles.input, { marginTop: 10 }]}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder='Password'
                    placeholderTextColor={'black'}
                    mode='flat'
                    label='Password'
                />

                <View style={styles.button}>
                    <TouchableOpacity>

                        <Text style={styles.textButton}>Logar</Text>

                    </TouchableOpacity>
                </View>

            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 50
    },
    containerTop: {
        flex: 4,
        backgroundColor: '#fff',
        width: '100%',
    },
    containerBottom: {
        flex: 5,
        backgroundColor: '#1B00A0',
        width: '95%',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        width: '90%',
        backgroundColor: '#fff'
    },
    button: {
        width: '90%',
        height: 60,
        backgroundColor: '#6508B3',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#8e15f1'
    },
    textButton: {
        color: '#fff',
        fontSize: 20
    }

});

// export default Profile;
