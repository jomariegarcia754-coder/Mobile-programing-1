import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { coffee } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>☕</Text>

      <Text style={styles.name}>{coffee.name}</Text>

      <Text style={styles.price}>{coffee.price}</Text>

      <Text style={styles.description}>
        {coffee.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  icon: {
    fontSize: 80,
    marginBottom: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4B2E20',
    textAlign: 'center',
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B5E3C',
    marginTop: 10,
    marginBottom: 20,
  },

  description: {
    fontSize: 17,
    color: '#5C4033',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#6F4E37',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});