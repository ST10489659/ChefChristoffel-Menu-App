import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"

type Course = "Starters" | "Mains" | "Desserts"

interface MenuItem {
  id: string
  name: string
  description: string
  course: Course
  price: number
}

/**
 * Form component for adding new menu items
 *
 * Features:
 * - Input validation with error messages
 * - Course selection
 * - Price validation (positive numbers only)
 * - Success feedback
 *
 * References:
 * - React Native TextInput: https://reactnative.dev/docs/textinput
 * - Form validation patterns
 *
 * @author Umumararungu Yan Ritha Uwamariya (ST10489659)
 */

interface AddMenuItemFormProps {
  onAdd: (item: Omit<MenuItem, "id">) => void
}

const COURSES: Course[] = ["Starters", "Mains", "Desserts"]

export default function AddMenuItemForm({ onAdd }: AddMenuItemFormProps) {
  const [dishName, setDishName] = useState("")
  const [description, setDescription] = useState("")
  const [course, setCourse] = useState<Course>("Starters")
  const [price, setPrice] = useState("")
  const [errors, setErrors] = useState<{
    dishName?: string
    description?: string
    price?: string
  }>({})

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {}

    if (!dishName.trim()) {
      newErrors.dishName = "Dish name is required"
    }

    if (!description.trim()) {
      newErrors.description = "Description is required"
    }

    const priceNum = Number.parseFloat(price)
    if (!price || isNaN(priceNum) || priceNum <= 0) {
      newErrors.price = "Please enter a valid price greater than 0"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validateForm()) {
      return
    }

    const newItem = {
      name: dishName.trim(),
      description: description.trim(),
      course,
      price: Number.parseFloat(price),
    } as Omit<MenuItem, "id">

    onAdd(newItem)

    // Reset form
    setDishName("")
    setDescription("")
    setCourse("Starters")
    setPrice("")
    setErrors({})

    Alert.alert("Success", "Menu item added successfully!")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Dish Name *</Text>
        <TextInput
          style={[styles.input, errors.dishName && styles.inputError]}
          value={dishName}
          onChangeText={setDishName}
          placeholder="Enter dish name"
          placeholderTextColor="#999"
        />
        {errors.dishName && <Text style={styles.errorText}>{errors.dishName}</Text>}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description *</Text>
        <TextInput
          style={[styles.input, styles.textArea, errors.description && styles.inputError]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter dish description"
          placeholderTextColor="#999"
          multiline
          numberOfLines={4}
        />
        {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Course *</Text>
        <View style={styles.courseButtons}>
          {COURSES.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.courseButton, course === c && styles.courseButtonActive]}
              onPress={() => setCourse(c)}
            >
              <Text style={[styles.courseButtonText, course === c && styles.courseButtonTextActive]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.formGroup}>
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

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Menu Item</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C1810",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D4A574",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
    color: "#2C1810",
  },
  inputError: {
    borderColor: "#DC2626",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  errorText: {
    color: "#DC2626",
    fontSize: 14,
    marginTop: 4,
  },
  courseButtons: {
    flexDirection: "row",
    gap: 10,
  },
  courseButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D4A574",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  courseButtonActive: {
    backgroundColor: "#8B4513",
    borderColor: "#8B4513",
  },
  courseButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B4513",
  },
  courseButtonTextActive: {
    color: "#FFF",
  },
  submitButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
})
