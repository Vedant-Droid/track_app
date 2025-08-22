const backendPort="https://track-app-bu6z.onrender.com";
import LocTracker from './helpers/locTracker.helper.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {

const handleButtonPress=async ()=>{
  try {
    const response=await fetch(`${backendPort}/test`)
    const data =await response.json()
    console.log(data)
    console.log("api is working i guess");

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

return (
<>
  <LocTracker/>
</>
  );
}

