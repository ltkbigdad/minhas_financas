import { StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Douglas Braz"/>   
      <Balance saldo="9.500,00" gastos="395,00"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
});
