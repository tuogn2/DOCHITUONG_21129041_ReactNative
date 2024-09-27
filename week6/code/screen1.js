import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/getItems')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return setData(res);
      });
  }, []);
  const Items = ({ item }: ItemProps) => {
    return (
      <View
        style={{
          height: '100%',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          alignItems:'flex-start',
          marginTop:10
        }}>
        <Image
          style={{ height: 100, width: 100 }}
          source={`https://picsum.photos/200`}
        />
        <View style={{
          
        }}>
          <Text>{item.name}</Text>
          <Text style={{color:'red'}}>{item.description}</Text>
        </View>
        <View style={{height:'100%',justifyContent:'center'}}>
          <Button title="Chat" />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
      <View style={{ flex: 10, width: '100%' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Items item={item} />}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
