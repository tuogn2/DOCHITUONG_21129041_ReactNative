import { Text, SafeAreaView, StyleSheet ,Button} from 'react-native';

import react, {useState} from 'react'






export default function App() {
  const [count,setCount] = useState(1);



  return (
    <SafeAreaView style={styles.container}>
     <Button title="tuong" onPress={()=>setCount(count+1)}>

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
