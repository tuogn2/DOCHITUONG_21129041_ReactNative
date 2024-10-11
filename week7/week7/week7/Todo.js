import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useState, useEffect } from 'react';
import { NameContext } from './App';
export default function Todo({ navigation }) {
  const { name, setname } = useContext(NameContext);
  const [inputValue, setInputValue] = useState(name);

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7')
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    fetch(`https://66f5fdd4436827ced975a180.mockapi.io/api/v1/weeek7/${id}`, {
      method: 'delete',
    }).then((res) => {
      const items = data.filter((item) => {
        return item.id !== id;
      });
      setData(items);
      return Toast.show({
        type: 'success',
        text1: 'sucessfully',
      });
    });
  };

  
  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <View style={{ width: 100, marginLeft: 10 }}>
            <Text style={{ fontWeight: 500 }}>Hi {name || 'tuong'}</Text>
            <Text>Have a nice day</Text>
          </View>
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

      <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ margin: 5 }}
                  onPress={() => handleDelete(item.id)}>
                  <AntDesign name="delete" size={15} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ margin: 5 }}
                  onPress={() => handlUpdate(item.id)}>
                  <AntDesign name="edit" size={15} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
          <AntDesign name="pluscircle" size={50} style={{ color: '#96CEB4' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
