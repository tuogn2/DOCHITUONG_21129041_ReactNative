import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { useState } from 'react';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import Started from './Started';

const obj = [
  {
    image:
      'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__',
    name: 'bycle',
    price: 200,
    type: 'M',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCPuZPtzO1oI2jXnHZcflYaQ2ywVhDYYPJWuM5i5Hj~OxhE29ok~sEmcttbUbbO3n8C-3IqAfDZCja1y9Q0r0IqpN9qcqAqAZj-TtN7hAg8wfrkMqrDyaukaOw6AZgIlkAsJQ5c7pqcr9K9J24Q3pCskyhhtzgKgXszLrzGO0anbAJtYfPhvope7nLOCmoeHVeID7EBoEvbQKAb1t3cpjti7OdHWFkjIP4P2FXB8eOMPfE20ieug8rVRed3IRWsiG8casD7x6OXtfevS8clXxgPUlhpRV71pzgvX4wl6juKfi8UYYTMExq~MlaDvPPKNCAdudc6OsyZFLO3KNKmACw__',
    name: 'bycle',
    price: 200,
    type: 'R',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__',
    name: 'bycle',
    price: 200,
    type: 'M',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCPuZPtzO1oI2jXnHZcflYaQ2ywVhDYYPJWuM5i5Hj~OxhE29ok~sEmcttbUbbO3n8C-3IqAfDZCja1y9Q0r0IqpN9qcqAqAZj-TtN7hAg8wfrkMqrDyaukaOw6AZgIlkAsJQ5c7pqcr9K9J24Q3pCskyhhtzgKgXszLrzGO0anbAJtYfPhvope7nLOCmoeHVeID7EBoEvbQKAb1t3cpjti7OdHWFkjIP4P2FXB8eOMPfE20ieug8rVRed3IRWsiG8casD7x6OXtfevS8clXxgPUlhpRV71pzgvX4wl6juKfi8UYYTMExq~MlaDvPPKNCAdudc6OsyZFLO3KNKmACw__',
    name: 'bycle',
    price: 200,
    type: 'R',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__',
    name: 'bycle',
    price: 200,
    type: 'M',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCPuZPtzO1oI2jXnHZcflYaQ2ywVhDYYPJWuM5i5Hj~OxhE29ok~sEmcttbUbbO3n8C-3IqAfDZCja1y9Q0r0IqpN9qcqAqAZj-TtN7hAg8wfrkMqrDyaukaOw6AZgIlkAsJQ5c7pqcr9K9J24Q3pCskyhhtzgKgXszLrzGO0anbAJtYfPhvope7nLOCmoeHVeID7EBoEvbQKAb1t3cpjti7OdHWFkjIP4P2FXB8eOMPfE20ieug8rVRed3IRWsiG8casD7x6OXtfevS8clXxgPUlhpRV71pzgvX4wl6juKfi8UYYTMExq~MlaDvPPKNCAdudc6OsyZFLO3KNKmACw__',
    name: 'bycle',
    price: 200,
    type: 'R',
  },
];

export default function Products() {
  const [data, setdata] = useState(obj);

  const [check, setcheck] = useState('all');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 25, fontWeight: 700, color: '#E94141' }}>
        The world’s Best Bike
      </Text>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity
          style={{
            borderBlockColor: 'red',
            borderWidth: 1,
            width:'auto'
          }}
            onPress={()=>setcheck('all')}
          >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>setcheck('M')}
          style={{
            borderBlockColor: 'red',
            borderWidth: 1,
           width:'auto'
          }}>
          <Text>Moutain</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>setcheck('R')}
          style={{
            borderBlockColor: 'red',
            borderWidth: 1,
            width:'auto'
          }}>
          <Text>Road</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}>
        {data.map((item, index) => {
          if(check === item.type || check==='all')
          return (
            <View
              style={{
                width: '48%',
                height: 200,
                backgroundColor: '#E941411A',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 5,
                marginBottom: 10,
                marginRight: 3,
              }}>
              <Image
                source={{ uri: `${item.image}` }}
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
