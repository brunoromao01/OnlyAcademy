import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Content from '../components/Content'


function Profile(): React.JSX.Element {
    const content = ['https://s2-casavogue.glbimg.com/CMELnDz8zBduFZZsRHqcw0Azyas=/0x0:2121x1414/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/k/Z/SaKWLGRZ2HZvSs7xsY6Q/02-as-paisagens-naturais-mais-lindas-do-brasil-lencois-maranhenses-min.jpg', 'https://s2-casavogue.glbimg.com/CMELnDz8zBduFZZsRHqcw0Azyas=/0x0:2121x1414/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/k/Z/SaKWLGRZ2HZvSs7xsY6Q/02-as-paisagens-naturais-mais-lindas-do-brasil-lencois-maranhenses-min.jpg', 'https://s2-casavogue.glbimg.com/CMELnDz8zBduFZZsRHqcw0Azyas=/0x0:2121x1414/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/k/Z/SaKWLGRZ2HZvSs7xsY6Q/02-as-paisagens-naturais-mais-lindas-do-brasil-lencois-maranhenses-min.jpg', 'https://s2-casavogue.glbimg.com/CMELnDz8zBduFZZsRHqcw0Azyas=/0x0:2121x1414/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/k/Z/SaKWLGRZ2HZvSs7xsY6Q/02-as-paisagens-naturais-mais-lindas-do-brasil-lencois-maranhenses-min.jpg', 'https://s2-casavogue.glbimg.com/CMELnDz8zBduFZZsRHqcw0Azyas=/0x0:2121x1414/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/k/Z/SaKWLGRZ2HZvSs7xsY6Q/02-as-paisagens-naturais-mais-lindas-do-brasil-lencois-maranhenses-min.jpg']

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>

            </View>
            <View style={styles.containerBottom}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                    <Text>1k followers</Text>
                    <Image
                        style={styles.user}
                        source={require('../assets/user.png')}
                    />
                    <Text>342 following</Text>
                </View>
               
                <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 10, color: 'black' }}>@Catherine132</Text>
                <View style={{ paddingHorizontal: 30 }}>
                    <Text style={{ fontWeight: '100', fontSize: 15, textAlign: 'center', marginTop: 10 }}>My name is Catherine, i like dancing in the rain and travelling all around the world.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20 }}>
                    <View style={[styles.button, { backgroundColor: '#5790DF' }]}>
                        <TouchableOpacity>
                            <Text style={{ color: 'white' }}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>
                                Message
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>
                                All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', marginHorizontal: 30 }}>
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

        </View>
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
        width: '100%'
    },
    containerBottom: {
        flex: 7,
        backgroundColor: '#e6eef4',
        width: '100%',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
    },
    user: {
        height: 50,
        width: 50
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 20,
        // borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Profile;
