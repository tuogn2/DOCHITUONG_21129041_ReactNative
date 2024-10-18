import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import image from './assets/fb7d7ce6-4b2f-453f-9f54-231a72f5914a.jpg';

export default function Started({route}) {
  const {data} = route.params
  console.log(data.image)
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E941411A',
          borderRadius: 20,
          padding: 5,
        }}>
        <Image
          style={{ flex: 3, width: 270, height: 200 }}
          source={{uri:`${data.image}`}}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 400 }}>{data.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>15% OFF I 350$</Text>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>{data.price}$</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,

          paddingVertical: 20,
        }}>
        <Text style={{ fontWeight: 800, fontSize: 26 }}>Description</Text>
        <Text style={{ padding: 10 }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection:'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>Tym</Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E94141',
            width: 200,
            height: 10,
            borderRadius: 30,
            paddingVertical: 20,
          }}>
          <Text style={{ fontSize: 23, fontWeight: 600, color: 'white' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
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
