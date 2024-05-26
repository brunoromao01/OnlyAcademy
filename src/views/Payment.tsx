import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RadioButton } from 'react-native-paper';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { handleIntegrationMP } from '../utils/IntegrationMP';


export default function Payment({ navigation }) {
    const [checked, setChecked] = useState('first');
    const handlePayment = async () => {
        const data = await handleIntegrationMP(checked)
        if (!data) {
            return console.log('ocorreu algum erro')
        }
        Linking.openURL(data)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <ImageBackground source={require('../assets/fundo.jpeg')} style={{ width: '100%', height: '110%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Feed')}>
                        <View style={styles.buttonIcon}>
                            <FontAwesome name={'arrow-left'} size={20} color={'#555'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.buttonIcon}>
                            <FontAwesome name={'user'} size={20} color={'#555'} />
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>

            </View>
            <View style={styles.containerBottom}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#000', marginTop: 20 }}>Selecione o tipo de conta:</Text>
                <View style={styles.viewCheckbox}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <TouchableWithoutFeedback onPress={() => setChecked('first')}>
                        <Text style={styles.viewCheckboxText}>Free</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.viewCheckbox}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <TouchableWithoutFeedback onPress={() => setChecked('second')}>
                        <Text style={styles.viewCheckboxText}>Premium Mensal</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.viewCheckbox}>
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                    <TouchableWithoutFeedback onPress={() => setChecked('third')}>
                        <Text style={styles.viewCheckboxText}>Premium Anual</Text>
                    </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={() => handlePayment()}>
                    <View style={{ width: 200, height: 50, backgroundColor: '#77B3D9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30 }}>
                        <Text style={styles.viewCheckboxText}>Confirmar pagamento</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View >
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
    viewCheckbox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 10
    },
    viewCheckboxText: {
        color: '#000'
    }

});

// export default Profile;
