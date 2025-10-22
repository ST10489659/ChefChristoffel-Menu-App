/**
 * Manage Screen - Add/Remove Menu Items
 *
 * Student: Umumararungu Yan Ritha Uwamariya
 * Student Number: ST10489659
 *
 * Learning Outcomes Demonstrated:
 * - LO4: Define a function in TypeScript (addMenuItem, removeMenuItem)
 * - LO6: Use functions to organise code
 */

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native"
import { Picker } from "@react-native-picker/picker"
import type { MenuItem, Course } from "../types"
import { useMenu} from '../MenuContext'

const COURSES: Course[] = ["Starters", "Mains", "Desserts", "Drinks"]



export default function ManageScreen() {
  const {menuItems, saveMenuItems} = useMenu();
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [course, setCourse] = useState<Course>("Starters")
  const [price, setPrice] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  // LO4: Define a function in TypeScript
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = "Dish name is required"
    }
    if (!description.trim()) {
      newErrors.description = "Description is required"
    }
    if (!price || isNaN(Number(price)) || Number(price) <= 0) {
      newErrors.price = "Please enter a valid price"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // LO4 & LO6: Using functions to organize code
  const addMenuItem = async () => {
    if (!validateForm()) {
      Alert.alert("Validation Error", "Please fix the errors before submitting")
      return
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      course,
      price: Number(price),
    }

    const updatedItems = [...menuItems, newItem]
    await saveMenuItems(updatedItems)

    // Reset form
    setName("")
    setDescription("")
    setCourse("Starters")
    setPrice("")
    setErrors({})

    Alert.alert("Success", `${newItem.name} has been added to the menu!`)
  }

  const removeMenuItem = (id: string) => {
    Alert.alert("Remove Item", "Are you sure you want to remove this item?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: async () => {
          const updatedItems = menuItems.filter((item) => item.id !== id)
          await saveMenuItems(updatedItems)
          Alert.alert("Success", "Item removed from menu")
        },
      },
    ])
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>✨👨‍🍳✨</Text>
        <Text style={styles.headerTitle}>Manage Your Menu</Text>
        <Text style={styles.headerSubtitle}>Add or remove dishes</Text>
      </View>

      {/* Add Menu Item Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add New Dish</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dish Name *</Text>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            value={name}
            onChangeText={setName}
            placeholder="e.g., Grilled Salmon"
            placeholderTextColor="#999"
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description *</Text>
          <TextInput
            style={[styles.input, styles.textArea, errors.description && styles.inputError]}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe the dish..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={3}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Course *</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={course} onValueChange={(value) => setCourse(value as Course)} style={styles.picker}>
              {COURSES.map((c) => (
                <Picker.Item label={c} value={c} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price (R) *</Text>
          <TextInput
            style={[styles.input, errors.price && styles.inputError]}
            value={price}
            onChangeText={setPrice}
            placeholder="0.00"
            placeholderTextColor="#999"
            keyboardType="decimal-pad"
          />
          {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={addMenuItem}>
          <Text style={styles.addButtonText}>Add to Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Current Menu Items */}
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Current Menu ({menuItems.length} items)</Text>
        {menuItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyText}>No menu items yet</Text>
            <Text style={styles.emptySubtext}>Add your first dish above</Text>
          </View>
        ) : (
          menuItems.map((item) => (
            <View style={styles.menuItem}>
              <View style={styles.menuItemContent}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemCourse}>{item.course}</Text>
                <Text style={styles.menuItemPrice}>R{item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeMenuItem(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5e6d3",
  },
  header: {
    backgroundColor: "#8B4513",
    padding: 24,
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#f5e6d3",
  },
  formContainer: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  inputError: {
    borderColor: "#dc2626",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 50,
  },
  errorText: {
    color: "#dc2626",
    fontSize: 12,
    marginTop: 4,
  },
  addButton: {
    backgroundColor: "#8B4513",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 16,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8B4513",
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#666",
  },
  menuItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  menuItemCourse: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B4513",
  },
  removeButton: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
})
