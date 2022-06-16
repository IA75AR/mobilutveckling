import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';


export default function Home () {
  
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Input />
        <StatusBar style="dark" />
      </View>
    </>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9ff47",
    alignItems: 'center',
    justifyContent: 'center',
  }
});