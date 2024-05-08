import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';


function Content(props): React.JSX.Element {
    console.log(props.data)
    const pathImage = {
        uri: (props.data)
    }
    return (
        <View style={styles.container}>
            <Text>{props.data}</Text>
            <Text>asodkasdoksa</Text>
            <Image
                style={{ width: 360, height: 150 }}

                source={{
                    uri: 'https://img.freepik.com/fotos-premium/retrato-de-uma-jovem-usando-um-telefone-celular_1048944-30344856.jpg',
                }}
            />
                  <Text>asodkasdoksa</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        borderWidth: 1,
        borderColor: 'color'
    },

});

export default Content;
