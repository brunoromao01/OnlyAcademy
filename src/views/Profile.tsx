import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import Content from '../components/Content'
import content from '../assets/base64';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


function Profile(): React.JSX.Element {
    const imagens = content

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <ImageBackground source={require('../assets/fundo.jpeg')} style={{ width: '100%', height: '110%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={styles.buttonIcon}>
                        <FontAwesome name={'arrow-left'} size={20} color={'#555'} />
                    </View>
                    <View style={styles.buttonIcon}>
                        <FontAwesome name={'envelope'} size={20} color={'#555'} />
                    </View>
                </ImageBackground>

            </View>
            <View style={styles.containerBottom}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginRight: 30 }}>1k</Text>
                        <Text style={{ color: 'black', marginRight: 30 }}>followers</Text>
                    </View>

                    <View style={styles.viewUser}>
                        <Image
                            style={styles.user}
                            source={require('../assets/user.png')}
                        />
                    </View>
                    <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 30 }}>342</Text>
                        <Text style={{ color: 'black', marginLeft: 30 }}>following</Text>
                    </View>
                </View>

                <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 15, color: 'black' }}>@Catherine132</Text>
                <View style={{ paddingHorizontal: 30 }}>
                    <Text style={{ fontWeight: '100', fontSize: 15, textAlign: 'center', marginTop: 10 }}>My name is Catherine, i like dancing in the rain and travelling all around the world.
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
    }

});

export default Profile;
