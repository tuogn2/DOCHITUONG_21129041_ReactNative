import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useState, useEffect } from 'react';
import { NameContext } from './App';
export default function Todo({ navigation }) {
  const { name, setname } = useContext(NameContext);
  const [inputValue, setInputValue] = useState(name);

  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7')
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res));
  }, []);
  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ height: 70, width: 70, borderRadius: 50 }}
        />
        <View style={{ width: 100, marginLeft: 10 }}>
          <Text style={{ fontWeight: 500 }}>Hi {name || 'tuong'}</Text>
          <Text>Have a nice day</Text>
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBlockColor: 'black',
            borderWidth: 1,
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 5,
          }}>
          <TextInput
            style={{ height: '100%', flex: 1, outlineStyle: 'none' }}
            placeholder="input your Job"
            onChangeText={(newText) => setInputValue(newText)}
            defaultValue={inputValue}
          />
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>

      <View>
        {data?.map((item, index) => {
          return (
            <View
              style={{
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{ width: '80%' }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="delete" size={15} color="black" />
                <AntDesign name="edit" size={15} color="black" />
              </View>
            </View>
          );
        })}
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={50} style={{color:'#96CEB4'}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
