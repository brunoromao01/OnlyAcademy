import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Alert, TouchableWithoutFeedback, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function Feed(): React.JSX.Element {
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
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Explore</Text>
                    <View style={styles.buttonIcon}>
                        <FontAwesome name={'bell'} size={20} color={'#555'} />
                    </View>
                </View>
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
    }

});

export default Feed;
