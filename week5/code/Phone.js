import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Button,
    TouchableOpacity,
  } from 'react-native';
  import phone from './assets/vs_blue.png';
  import star from './assets/star.png';
  import arowRight from './assets/Vector.png';
  export default function Phone() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, paddingBottom: 75 }}>
          <Image source={phone} style={{}} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Image source={star} />
              <Image source={star} />
              <Image source={star} />
              <Image source={star} />
              <Image source={star} />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>(Xem 828 đánh giá)</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingLeft: 30,
              }}>
              <Text style={{ fontWeight: 600 }}>1.790.000 đ</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  color: 'gray',
                  fontWeight: 600,
                }}>
                1.790.000 đ
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingLeft: 30,
              }}>
              <Text style={{ fontWeight: 400, color: 'red' }}>
                Ở ĐÂU RẺ HƠN HOÀN TIỀN
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 20,
                marginHorizontal: 10,
              }}>
              <Text style={{ fontWeight: 600 }}>4 MÀU-CHỌN MÀU</Text>
              <Image source={arowRight} />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                marginHorizontal: 10,
                backgroundColor: '#CA1536',
                color: 'white',
                textAlign: 'center',
                justifyContent: 'center',
                height: 50,
                borderRadius: 20,
              }}>
              Chon Mua
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  