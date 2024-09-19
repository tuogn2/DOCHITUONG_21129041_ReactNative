import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import react, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count === 1) {
      return;
    } else setCount(count - 1);
  };
  const handlePlus = () => setCount(count + 1);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#23235B',
          margin: 20,
          borderRadius: 30,
        }}>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: 'white',
                textAlign: 'center',
              }}>
              PASSWORD GENERATOR
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              value={''}
              style={{
                height: 60,
                backgroundColor: '#151537',
                marginHorizontal: 9,
              }}
            />
          </View>
        </View>
        <View style={{ flex: 2, padding: 5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 20, width: 800, color: 'white' }}>
                Password length
              </Text>
            </View>
            <View style={{ flex: 2, marginRight: 3 }}>
              <TextInput
                value={''}
                style={{ height: 20, backgroundColor: 'white' }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flex: 9 }}>
              <Text style={{ fontSize: 20, width: 800, color: 'white' }}>
                Include lower case letters
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: 3 }}>
              <TextInput
                value={''}
                style={{ height: 20, backgroundColor: 'white' }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 20, width: 800, color: 'white' }}>
                Include upcase letters
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: 3 }}>
              <TextInput
                value={''}
                style={{ height: 20, backgroundColor: 'white' }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 20, width: 800, color: 'white' }}>
                Include number
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: 3 }}>
              <TextInput
                value={''}
                style={{ height: 20, backgroundColor: 'white' }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{ flex: 5 }}>
              <Text style={{ fontSize: 20, width: 800, color: 'white' }}>
                Include special symbol
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: 3 }}>
              <TextInput
                value={''}
                style={{ height: 20, backgroundColor: 'white' }}
              />
            </View>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <TouchableOpacity
              style={{
                height: 60,
                width: 250,
                backgroundColor: '#3B3B98',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:10
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  padding: 5,
                  color: 'white',
                }}>
               GENERATE PASSWORD
              </Text>
            </TouchableOpacity>
            
            
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3B3B98',
    padding: 8,
  },
});
