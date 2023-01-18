import { FlatList, StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Cliente x pix',
    value: '200',
    date: '17/09/2022',
    type: 1 // receita / entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '2.800,00',
    date: '17/09/2022',
    type: 1 // receita / entrada
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Douglas Braz"/>   
      <Balance saldo="9.500,00" gastos="395,00"/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ( {item} ) => <Movements data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
