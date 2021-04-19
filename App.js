import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is Normal Text Component</Text>

      <Text 
        ellipsizeMode={'tail'}
        numberOfLines={1}
        style={{width:'50%'}}
        >This is ellipsizeMode text learn more about ellipsizeMode</Text>

      <Text
        onPress={() => alert('onPress')}>Text Component onPress Listener</Text>

      <Text
        selectable={true}>You can select this text</Text>
      
      <Text 
        style={{color:'tomato'}}>Text Component can be <Text style={{fontSize:20, fontWeight:'bold'}}>Nested</Text>
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
