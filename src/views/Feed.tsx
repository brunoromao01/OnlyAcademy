import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Alert, TouchableWithoutFeedback, FlatList, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import content from '../assets/base64foto';

export default function Feed({ navigation }) {
    const [photo, setPhoto] = useState('')
    const contents = content

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
        const options = {
            mediaType: 'photo'
        }
        const result = await launchImageLibrary(options)
        if (result.assets) {
            setPhoto(result.assets[0].uri.toString());
            return
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

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            handleImageUser()
                        }}>
                        <View style={styles.buttonIcon}>
                            <FontAwesome name={'camera'} size={20} color={'#555'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation.navigate('Profile')
                        }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Explore</Text>
                    </TouchableWithoutFeedback>
                    <View style={styles.buttonIcon}>
                        <FontAwesome name={'bell'} size={20} color={'#555'} />
                    </View>
                </View>
                <>
                    <FlatList
                        horizontal={true}
                        data={contents}
                        renderItem={({ item, index }) => {
                            const pathImage = {
                                uri: (item.photo)
                            }

                            return (
                                <View style={styles.viewUsers}>
                                    <View style={styles.users}>
                                        <Image
                                            style={{ width: '100%', height: '100%' }}
                                            resizeMode='contain'
                                            source={pathImage}
                                        />
                                    </View>
                                    <Text>{item.name}</Text>
                                </View>
                            )
                        }}
                    />
                </>
            </View>
            <View style={styles.containerBottom}>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    containerTop: {
        flex: 2,
        backgroundColor: '#fff',
        width: '100%',
    },
    containerBottom: {
        flex: 6,
        backgroundColor: '#e9e9eb',
        width: '95%',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
    },
    users: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'black'
    },
    viewUsers: {
        height: 85,
        width: Dimensions.get('window').width / 4,
        justifyContent: 'center',
        alignItems: 'center',
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
    }

});


