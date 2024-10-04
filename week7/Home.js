import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from '@expovector-iconsAntDesign';
import { useContext, useState } from 'react';
import { NameContext } from '.App';
export default function Home({ navigation }) {
  const { name, setname } = useContext(NameContext);
  const [inputValue, setInputValue] = useState(name);
  return (
    View style={{ flex 1, paddingHorizontal 5 }}
      View style={{ flex 1,flexDirection'row',alignItems'center',justifyContent'center', }}
        Text style={{ fontSize 30 }}Manager your taskText
      View
      View style={{ flex 1, flexDirection 'column', alignItems 'center' }}
        View
          style={{
            flexDirection 'row',
            alignItems 'center',
            justifyContent 'center',
            borderBlockColor 'black',
            borderWidth 1,
            marginHorizontal 20,
            borderRadius 10,
            padding 5,
          }}
          AntDesign name=mail size={24} color=black 
          TextInput
            style={{ height '100%', flex 1, outlineStyle 'none' }}
            placeholder=input your name
            onChangeText={(newText) = setInputValue(newText)}
            defaultValue={inputValue}
          
        View
        TouchableOpacity
          style={{
            backgroundColor '#B7E0FF',
            height 50,
            width 80,
            flexDirection 'row',
            justifyContent 'center',
            alignItems 'center',
            borderRadius 20,
            marginTop 100,
          }}
          onPress={() = {
            setname(inputValue);
            navigation.navigate('Todo');
          }}
          TextStartText
        TouchableOpacity
      View
    View
  );
}

const styles = StyleSheet.create({});
