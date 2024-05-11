import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Video from 'react-native-video';


function Content(props): React.JSX.Element {
    const pathImage = {
        uri: (props.data)
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: '100%', height: '100%' }}
                resizeMode='contain'
                source={pathImage}
            />
            {/* <Video source={{ uri: "https://www.youtube.com/watch?v=9EKi2E9dVY8&list=RD9EKi2E9dVY8&start_radio=1" }}   // Can be a URL or a local file.
                ref={(ref) => {
                    // this.player = ref
                }}                                   
                // onBuffer={this.onBuffer}               
                // onError={this.videoError}              
                style={styles.backgroundVideo} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderWidth: 2,
        borderColor: 'white'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});

export default Content;
