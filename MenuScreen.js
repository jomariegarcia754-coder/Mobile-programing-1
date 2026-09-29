import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const coffeeMenu = [
  {
    id: 1,
    name: 'Cappuccino',
    price: '₱120',
    description:
      'A classic coffee made with espresso, steamed milk, and milk foam.',
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    price: '₱145',
    description:
      'Espresso combined with steamed milk, vanilla, and sweet caramel.',
  },
  {
    id: 3,
    name: 'Iced Latte',
    price: '₱130',
    description:
      'Smooth espresso and cold milk served over ice.',
  },
  {
    id: 4,
    name: 'Mocha',
    price: '₱140',
    description:
      'A delicious combination of espresso, chocolate, and steamed milk.',
  },
  {
    id: 5,
    name: 'Americano',
    price: '₱100',
    description:
      'Espresso mixed with hot water for a smooth and simple coffee.',
  },
];

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>☕ Our Coffee Menu</Text>

      {coffeeMenu.map((coffee) => (
        <TouchableOpacity
          key={coffee.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Details', {
              coffee: coffee,
            })
          }
        >
          <View>
            <Text style={styles.name}>{coffee.name}</Text>
            <Text style={styles.price}>{coffee.price}</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D3',
    padding: 20,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4B2E20',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    elevation: 3,
  },

  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4B2E20',
  },

  price: {
    fontSize: 16,
    color: '#8B5E3C',
    marginTop: 5,
  },

  arrow: {
    fontSize: 32,
    color: '#6F4E37',
  },

  backButton: {
    backgroundColor: '#8B5E3C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});