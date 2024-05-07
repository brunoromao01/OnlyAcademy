import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Text>
        OnlyAcademy
      </Text>
      <Text>
        Teste branch
      </Text>
      <Text>
        Teste branch
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
