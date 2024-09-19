import { Text, SafeAreaView, StyleSheet ,Button} from 'react-native';

import react, {useState} from 'react'





 
export default function App() {
  const [count,setCount] = useState([5,6,7]);


const countArray = count.map((c)=> c +1
     )
  return (
    <SafeAreaView style={styles.container}>
     <Button title="tuong" onPress={()=>setCount(countArray)}>
     </Button>
     <Text>
      {count}
     </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }

});
