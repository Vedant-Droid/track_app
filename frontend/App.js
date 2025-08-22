const backendPort="https://treasure-hunt-25.onrender.com";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {

const handleButtonPress=async ()=>{
  try {
    const response=await fetch(`${backendPort}/test`)
    const data =await response.json()
    console.log(data.message)
    console.log("api is working i guess");

  } catch (error) {
    console.error("Error fetching data:", error);
  }


}

return (
    <View style={styles.container}>
      <Text>lol nigga</Text>
      <Button title="TestAPI" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
