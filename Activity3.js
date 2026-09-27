import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Keyboard,
} from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [inventory, setInventory] = useState([]);

  const addItem = () => {
    const trimmedText = inputText.trim();

    if (!trimmedText) return;

    const newItem = {
      id: Date.now().toString(),
      name: trimmedText,
      inStock: true,
    };

    setInventory((currentItems) => [newItem, ...currentItems]);
    setInputText("");
    Keyboard.dismiss();
  };

  const toggleStock = (id) => {
    setInventory((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, inStock: !item.inStock }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setInventory((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const lowStockCount = inventory.filter(
    (item) => !item.inStock
  ).length;

  const renderInventoryItem = ({ item }) => (
    <View style={styles.inventoryCard}>
      <TouchableOpacity
        style={styles.itemMain}
        activeOpacity={0.7}
        onPress={() => toggleStock(item.id)}
      >
        <View
          style={[
            styles.statusDot,
            item.inStock
              ? styles.statusAvailable
              : styles.statusUnavailable,
          ]}
        />

        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text
            style={[
              styles.itemStatus,
              item.inStock
                ? styles.availableText
                : styles.unavailableText,
            ]}
          >
            {item.inStock ? "In stock" : "Needs restocking"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        activeOpacity={0.7}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#29231D"
      />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>HEARTH & BEAN</Text>
            <Text style={styles.title}>Coffeehouse Inventory</Text>
            <Text style={styles.subtitle}>
              Keep the café ready for every cup.
            </Text>
          </View>

          <View style={styles.coffeeIcon}>
            <Text style={styles.coffeeIconText}>☕</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {inventory.length}
            </Text>
            <Text style={styles.statLabel}>Items</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {inventory.filter((item) => item.inStock).length}
            </Text>
            <Text style={styles.statLabel}>In Stock</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={[styles.statNumber, styles.warningNumber]}>
              {lowStockCount}
            </Text>
            <Text style={styles.statLabel}>Restock</Text>
          </View>
        </View>

        {/* Add Item */}
        <View style={styles.addSection}>
          <Text style={styles.sectionLabel}>ADD INVENTORY ITEM</Text>

          <View style={styles.inputRow}>
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="e.g. Espresso beans"
              placeholderTextColor="#9A9084"
              style={styles.input}
              onSubmitEditing={addItem}
              returnKeyType="done"
            />

            <TouchableOpacity
              style={styles.addButton}
              activeOpacity={0.8}
              onPress={addItem}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Inventory List */}
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Current Inventory</Text>
          <Text style={styles.listHint}>Tap an item to update stock</Text>
        </View>

        <FlatList
          data={inventory}
          keyExtractor={(item) => item.id}
          renderItem={renderInventoryItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.listContent,
            inventory.length === 0 && styles.emptyListContent,
          ]}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>☕</Text>
              <Text style={styles.emptyTitle}>
                Your inventory is empty
              </Text>
              <Text style={styles.emptyText}>
                Add your first coffeehouse supply above.
              </Text>
            </View>
          }
        />

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <Text style={styles.footerText}>
            HEARTH & BEAN • DAILY STOCK
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#29231D",
  },

  container: {
    flex: 1,
    backgroundColor: "#F5EFE5",
  },

  // Header
  header: {
    backgroundColor: "#29231D",
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    color: "#D9B982",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2.2,
    marginBottom: 7,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  subtitle: {
    color: "#C8BFB2",
    fontSize: 13,
    marginTop: 7,
  },

  coffeeIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#8A6A4B",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  coffeeIconText: {
    fontSize: 25,
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: -10,
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 3,
  },

  statNumber: {
    color: "#29231D",
    fontSize: 21,
    fontWeight: "800",
  },

  warningNumber: {
    color: "#A14D45",
  },

  statLabel: {
    color: "#8C8073",
    fontSize: 11,
    marginTop: 3,
    fontWeight: "600",
  },

  // Add section
  addSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  sectionLabel: {
    color: "#8A6A4B",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  inputRow: {
    flexDirection: "row",
    gap: 10,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1D7C8",
    borderRadius: 13,
    paddingHorizontal: 16,
    color: "#29231D",
    fontSize: 14,
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 13,
    backgroundColor: "#8A6A4B",
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "300",
    lineHeight: 30,
  },

  // List header
  listHeader: {
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  listTitle: {
    color: "#29231D",
    fontSize: 18,
    fontWeight: "800",
  },

  listHint: {
    color: "#9A9084",
    fontSize: 9,
    maxWidth: 115,
    textAlign: "right",
  },

  // List
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  emptyListContent: {
    flexGrow: 1,
    justifyContent: "center",
  },

  inventoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E0D3",
  },

  itemMain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 13,
  },

  statusAvailable: {
    backgroundColor: "#4C7A5A",
  },

  statusUnavailable: {
    backgroundColor: "#A14D45",
  },

  itemTextContainer: {
    flex: 1,
  },

  itemName: {
    color: "#29231D",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },

  itemStatus: {
    fontSize: 11,
    fontWeight: "600",
  },

  availableText: {
    color: "#4C7A5A",
  },

  unavailableText: {
    color: "#A14D45",
  },

  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 9,
    backgroundColor: "#F7ECEA",
  },

  deleteText: {
    color: "#A14D45",
    fontSize: 11,
    fontWeight: "800",
  },

  // Empty state
  emptyState: {
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 42,
    marginBottom: 12,
  },

  emptyTitle: {
    color: "#29231D",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },

  emptyText: {
    color: "#8C8073",
    fontSize: 13,
    textAlign: "center",
    marginTop: 7,
    lineHeight: 19,
  },

  // Footer
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    alignItems: "center",
  },

  footerLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#E1D7C8",
    marginBottom: 9,
  },

  footerText: {
    color: "#A49A8D",
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
});