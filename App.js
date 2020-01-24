import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';


export default function App() {
  const pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
  console.log(1111, this);
  return (
    <View style={styles.container}>
      <Image source={pic} style={{ marginBottom: 10, width: 100, height: 110 }} />
      <Text>Hello word! tam</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
      />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
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
