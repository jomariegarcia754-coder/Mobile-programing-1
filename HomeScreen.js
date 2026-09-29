import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>☕</Text>

      <Text style={styles.title}>Welcome to CoffeeHouse</Text>

      <Text style={styles.subtitle}>
        Fresh coffee, delicious drinks, and a cozy place to relax.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>View Coffee Menu</Text>
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
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B2E20',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 16,
    color: '#6F4E37',
    textAlign: 'center',
    lineHeight: 24,
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