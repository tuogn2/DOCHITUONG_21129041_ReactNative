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
export default function Color() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,justifyContent:'center'}}>
          <Image source={phone} style={{height:120,width:100}}/>
          </View>
          <View style={{flex:2,paddingLeft:5,paddingTop:15}}>
          <Text style={{fontWeight:500}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
        </View>
        <View style={{flex:3,backgroundColor:'#C4C4C4'}}>
          <View style={{}}>
             <View style={{}}>
              <Text style={{paddingLeft:5}}>
                Chọn một màu bên dưới:
              </Text>
          </View>
          <View style={{alignItems:'center'}}>
             <View style={{width:75,height:75,backgroundColor:'red',marginVertical:10}}> 
            </View>
            <View style={{width:75,height:75,backgroundColor:'blue',marginVertical:10}}> 
            </View>
            <View style={{width:75,height:75,backgroundColor:'black',marginVertical:10}}> 
            </View>
            <View style={{width:75,height:75,backgroundColor:'#C5F1FB',marginVertical:10}}> 
            </View>
            
          </View>
          </View>
<View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
           <TouchableOpacity
            style={{
              width:300,
              marginHorizontal: 10,
              backgroundColor: '#CA1536',
              color: 'white',
              textAlign: 'center',
              justifyContent: 'center',
              height: 50,
              borderRadius: 20,
            }}>
            Xong
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
  
});
