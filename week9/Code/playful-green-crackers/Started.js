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

export default function Started({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 5 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 400 }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
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
          source={image}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          flex: 1,
          fontWeight: 800,
          fontSize: 26,
          textAlign: 'center',
          paddingVertical: 20,
        }}>
        POWER BIKE SHOP
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Products')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E94141',
            width: 200,
            height: 50,
            marginBottom:20,
            borderRadius: 30,
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
