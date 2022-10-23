import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Title</Text>
      </View>

      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text>Left</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.right}>
            <Text>Right</Text>
          </View>
        </View>
      </View>

      <Image style={styles.logo} source = {{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
      <Image style={styles.logo} source = {require("./assets/snack-icon.png")} />

      <Button title="Button" onPress={() => Alert.alert('Button pressed!')} />

      <TouchableOpacity style={styles.resolvedContainerStyle} onPress ={() => Alert.alert("Touchable Opacity pressed")}>
      <Text style= {styles.textStye}> Touchable opacity </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //da se na stranici proširi koliko može
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Georgia',
    color: 'orange',
    marginBottom: 20,
  },
  jumbotron: {
    flexDirection: 'row',
    margin: 20,
  },
  left: {
    backgroundColor: 'salmon',
    padding: 10,
    margin: 10,
    borderBottomWidth: 5,
    borderRadius: 4,
  },
  right: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,
    borderTopWidth: 5,
    borderRadius: 4,
  },
 logo: {
    width:100,
    height:100,
    marginLeft: 150,
    marginBottom: 50,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "gray",
    padding: 20,
  },
  textStye : {
    fontSize: 20,
    color: "white",
    fontFamily: 'Georgia',
    textAlign: 'center',
  }
});
