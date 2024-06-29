import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';
import { supabase } from '../services/lib/supabase';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../hook/useAuth';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const { user, setUser } = useAuth()

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            Alert.alert('Erro:', error.message)
        } else {
            console.log('data.user')
            console.log(data.user)
            setUser(data.user)
            navigation.navigate('Profile', { id: data.user.id })
        }
    }

    const handleSignup = async () => {
        const data = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (data.error) {
            Alert.alert('Erro', data.error.message)
        } else {
            setUser(data.user)
            setIsLogin(true)
            ToastAndroid.showWithGravity('Cadastrado com sucesso!', ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50);
        }
    }

    useEffect(() => {
        setConfirmPassword('')
        setPassword('')
        setEmail('')
    }, [isLogin])

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <ImageBackground source={require('../assets/logo.png')} style={{ width: '100%', height: '110%', flexDirection: 'row', justifyContent: 'space-between', }} />

            </View>
            <View style={styles.containerBottom}>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-evenly', marginBottom: 20 }}>
                    <TouchableWithoutFeedback onPress={() => setIsLogin(true)}>
                        <View style={{ borderBottomWidth: isLogin ? 1 : 0, borderColor: 'white', width: '50%', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: isLogin ? 22 : 20, }}>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => setIsLogin(false)}>
                        <View style={{ borderBottomWidth: isLogin ? 0 : 1, borderColor: 'white', width: '50%', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: isLogin ? 20 : 22, }}>Cadastrar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <TextInput style={[styles.input, { marginBottom: 10 }]}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder='Email'
                    placeholderTextColor={'black'}
                    mode='flat'
                    label='Email'

                />
                <TextInput style={[styles.input, { marginTop: 10 }]}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder='Senha'
                    placeholderTextColor={'black'}
                    mode='flat'
                    label='Senha'
                    secureTextEntry
                />
                {!isLogin ?
                    <TextInput style={[styles.input, { marginTop: 20 }]}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        placeholder='Confirme a senha'
                        placeholderTextColor={'black'}
                        mode='flat'
                        label='Confirme a senha'
                        secureTextEntry
                    /> : false
                }
                <TouchableOpacity onPress={() => {
                    if (isLogin) {
                        handleLogin()
                    } else {
                        handleSignup()
                    }

                }}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>{isLogin ? 'Logar' : 'Cadastrar'}</Text>
                    </View>
                </TouchableOpacity>

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
        width: 300,
        height: 60,
        backgroundColor: '#6508B3',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#8e15f1'
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

});

// export default Profile;
