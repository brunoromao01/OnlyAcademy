import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import Content from '../components/Content'
import { TextInput, Card, Text } from 'react-native-paper'
import content from '../assets/base64';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { supabase } from '../services/lib/supabase';
import uuid from 'react-native-uuid';


export default function Profile(props) {
    const idUser = props.route.params.id
    const imagens = content
    const [showModal, setShowModal] = useState(false)
    const [bio, setBio] = useState('')
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dataBio, setDataBio] = useState('')
    const [dataUserName, setDataUserName] = useState('')

    const [photo, setPhoto] = useState('')

    const pickImageCamera = async () => {
        const options = {
            mediaType: 'photo',
            saveToPhotos: false,
            cameraType: 'front',
            quality: 1
        }
        const result = await launchCamera(options)
        if (result.assets) {
            setPhoto(result.assets[0].uri.toString());
            return
        }
    }

    const pickImageGalery = async () => {
        try {
            const options = {
                mediaType: 'photo'
            }
            const result = await launchImageLibrary(options)
            if (result.didCancel) {
                console.log('User cancelled image picker')
                return
            } else if (result.errorCode) {
                console.log('ImagePicker Error: ', result.errorMessage)
                return
            }
            const uri = result.assets[0].uri?.toString()
            if (!uri) {
                console.log('Image URI not found')
                return
            }
            const response = await fetch(uri)
            const blob = await response.blob()
            //   const { data, error } = await supabase
            //     .storage
            //     .from('images')
            //     .upload(idUser+'/', blob)
            const { data, error } = await supabase
                .storage
                .from('images')
                .list(idUser + '/', {
                    limit: 100,
                    offset: 0,
                    sortBy: { column: 'name', order: 'asc' }
                })
            console.log(data)

            if (error) {
                console.log('Erro ao fazer upload:', error.message)
            } else {
                // console.log('Upload realizado com sucesso:', data)
            }

            if (result.assets) {
                setPhoto(result.assets[0].uri.toString())
            }
        } catch (error) {
            console.log('Erro inesperado:', error)
        }
    }

    const handleImageUser = () => {
        Alert.alert("IMAGEM", "Selecione o local em que está a sua foto:", [
            {
                text: 'Galeria',
                onPress: () => pickImageGalery(),
                style: 'default'
            },
            {
                text: 'Câmera',
                onPress: () => pickImageCamera(),
                style: 'default'
            }
        ])
    }

    const selectProfile = async () => {
        try {
            const { data, error } = await supabase
                .from('profile')
                .select('*');

            if (error) throw error;
            setDataBio(data[0].bio)
            setDataUserName(data[0].user_name)
            setUserName(data[0].user_name)
            setBio(data[0].bio)
            setFirstName(data[0].first_name)
            setLastName(data[0].last_name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        selectProfile()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <ImageBackground source={require('../assets/fundo.jpeg')} style={{ width: '100%', height: '110%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Feed')}>
                        <View style={styles.buttonIcon}>
                            <FontAwesome name={'arrow-left'} size={20} color={'#555'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
                        <View style={[styles.buttonIcon, { width: 100 }]}>
                            <Text style={{ color: 'black', fontWeight: '800' }}
                            >Editar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.buttonIcon}>
                        <FontAwesome name={'envelope'} size={20} color={'#555'} />
                    </View>
                </ImageBackground>

            </View>
            <Modal
                visible={showModal}
                transparent
                onRequestClose={() => setShowModal(false)}
                animationType='slide'
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={() => setShowModal(false)}><View style={{ flex: 1, width: '100%' }} /></TouchableWithoutFeedback>
                    <View style={{ flex: 3, width: '95%', backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            onChangeText={text => {
                                setFirstName(text)
                            }}
                            value={firstName}
                            style={{ width: '90%', marginTop: 15 }}
                            mode='outlined'
                            label='Primeiro nome'
                            placeholder='Ex: João'
                            keyboardType='default'
                            maxLength={50}
                            numberOfLines={1}
                        />
                        <TextInput
                            onChangeText={text => {
                                setLastName(text)
                            }}
                            value={lastName}
                            style={{ width: '90%', marginTop: 15 }}
                            mode='outlined'
                            label='Último nome'
                            placeholder='Ex: Silva'
                            keyboardType='default'
                            maxLength={20}
                            numberOfLines={1}
                        />
                        <TextInput
                            onChangeText={text => {
                                setUserName(text)
                            }}
                            value={userName}
                            style={{ width: '90%', marginTop: 15 }}
                            mode='outlined'
                            label='Nome de usuário'
                            placeholder='Ex: joao.silva'
                            keyboardType='default'
                            maxLength={20}
                            numberOfLines={1}
                        />
                        <TextInput
                            onChangeText={text => {
                                setBio(text)
                            }}
                            value={bio}
                            style={{ width: '90%', marginTop: 15 }}
                            mode='outlined'
                            label='Bio'
                            placeholder='Ex: Eu gosto de ...'
                            keyboardType='default'
                            maxLength={200}
                            numberOfLines={3}
                        />
                        <TouchableOpacity onPress={async () => {
                            try {
                                console.log(firstName)
                                console.log(bio)
                                const { error } = await supabase
                                    .from('profile')
                                    .update({
                                        first_name: firstName,
                                        bio: bio,
                                    })
                                    .eq('user_id', idUser)

                                if (!error) {
                                    selectProfile()
                                }
                            } catch (error) {
                                console.log('ERRO: ', error)
                            } finally {
                                setShowModal(false)
                            }


                        }}>
                            <View style={styles.buttonSave}>
                                <Text style={styles.textButton}>Salvar</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableWithoutFeedback onPress={() => setShowModal(false)}><View style={{ flex: 1, width: '100%' }} /></TouchableWithoutFeedback>


                </View>
            </Modal>
            <View style={styles.containerBottom}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 30 }}>1k</Text>
                        <Text style={{ color: 'black', marginRight: 30 }}>followers</Text>
                    </View>


                    <View style={styles.viewUser}>
                        <TouchableOpacity onPress={() => {
                            handleImageUser()
                        }}>
                            <Image
                                style={styles.user}
                                source={require('../assets/user.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 30 }}>342</Text>
                        <Text style={{ color: 'black', marginLeft: 30 }}>following</Text>
                    </View>
                </View>

                <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 15, color: 'black' }}>@{dataUserName}</Text>
                <View style={{ paddingHorizontal: 30 }}>
                    <Text style={{ fontWeight: '400', fontSize: 15, textAlign: 'center', marginTop: 10, color: '#000' }}>{dataBio}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={[styles.button, { backgroundColor: '#5790DF', marginRight: 10 }]}>
                        <TouchableOpacity>
                            <Text style={{ color: 'white' }}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.button, { marginLeft: 10 }]}>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>
                                Message
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20 }}>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>
                                All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>
                                Photos
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>
                                Videos
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={content}
                    renderItem={({ item, index }) => {
                        return (
                            <Content data={item} />
                        )
                    }}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#093d89',
    },
    containerTop: {
        flex: 2,
        backgroundColor: '#093d89',
        width: '100%',
    },
    containerBottom: {
        flex: 8,
        backgroundColor: '#e6eef4',
        width: '100%',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
    },
    user: {
        height: 75,
        width: 75,
        borderRadius: 37
    },
    viewUser: {
        height: 82,
        width: 82,
        borderRadius: 41,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -5,
        left: (Dimensions.get('window').width / 2) - 41,

    },
    button: {
        width: 100,
        height: 35,
        borderRadius: 20,
        // borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonIcon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#e9e9eb',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSave: {
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


