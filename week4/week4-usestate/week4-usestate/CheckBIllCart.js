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

export default function CheckBIllCart() {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count === 1) {
      return;
    } else setCount(count - 1);
  };
  const handlePlus = () => setCount(count + 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2, backgroundColor: '#ffff', margin: 5 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={{
              uri: 'https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp',
            }}
            style={{ width: 100, height: 120, margin: 5 }}
          />
          <View
            style={{ flex: 2, marginLeft: 5, justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontWeight: 700, fontSize: 12, lineHeight: 20 }}>
                Nguyên hàm tích phân và ứng dụng cung cấp bởi trang tiki trading
              </Text>
            </View>
            <Text style={{ color: '#C7253E', fontWeight: 900, marginTop: 5 }}>
              141.800D
            </Text>
            <Text
              style={{
                color: '#E2DAD6',
                marginTop: 5,
                textDecorationLine: 'line-through',
                textDecorationColor: 'red',
              }}>
              141.800D
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button
                  title="-"
                  style={{ width: 4, height: 2 }}
                  color="#808080"
                  onPress={handleMinus}
                />
                <Text style={{ marginHorizontal: 5 }}>{count}</Text>
                <Button
                  title="+"
                  style={{ width: 4 }}
                  color="#808080"
                  onPress={handlePlus}
                />
              </View>
              <Text style={{ color: '#4F75FF', fontWeight: 600 }}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, paddingTop: 10, margin: 5 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <Text>Mã giảm giá đã lưu</Text>
            <Text style={{ color: '#134FEC', marginLeft: 5, fontWeight: 500 }}>
              Xem tại đây
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                borderColor: '#ccc', // Border color
                borderWidth: 1, // Border width
                marginRight: 5,
              }}>
              <TextInput
                value={'Mã giảm giá'}
                style={{ height: 60, marginLeft: 5 }}
              />
            </View>
            <TouchableOpacity
              style={{
                height: 60,
                width: 90,
                backgroundColor: '#0A5EB7',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  padding: 5,
                  color: 'white',
                }}>
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: '#C4C4C4' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            marginTop: 5,
          }}>
          <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{ color: '#134FEC', fontWeight: '500', width: 60 }}>
            Nhập tại đây?
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            marginTop: 15,
            height:70
          }}>
          <Text style={{fontSize:30,fontWeight:600}}>Tạm Tính</Text>
          <Text style={{ color:'red',fontSize:20, fontWeight: '500' }}>
            118.000Đ
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', textAlign: 'right' }}>
            Thành tiền:118 đ
          </Text>
          <Button title="Tiến hành đặt hàng" color="#FF0000" />
        </View>
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
