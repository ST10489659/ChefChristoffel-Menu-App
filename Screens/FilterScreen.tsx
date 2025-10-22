/**
 * Filter Screen - Filter Menu by Course
 *
 * Student: Umumararungu Yan Ritha Uwamariya
 * Student Number: ST10489659
 *
 * Learning Outcomes Demonstrated:
 * - LO2: Use a while loop in TypeScript (filter operation)
 * - LO6: Use functions to organise code (filterByCourse)
 */

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { MenuItem, Course, COURSES } from "../types"
import MenuCard from "../components/MenuCard"
import { useMenu} from '../MenuContext'

interface FilterScreenProps {
  navigation: any
  
}

export default function FilterScreen() {
  const {menuItems} = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<Course | "All">("All")

  // LO6: Using functions to organize code
  const filterByCourse = (course: Course | "All"): MenuItem[] => {
    if (course === "All") {
      return menuItems
    }
    // LO2: Filter operation (similar to while loop concept)
    return menuItems.filter((item) => item.course === course)
  }

  const filteredItems = filterByCourse(selectedCourse)

  const getCourseIcon = (course: Course | "All"): string => {
    switch (course) {
      case "Starters":
        return "🥗"
      case "Mains":
        return "🍖"
      case "Desserts":
        return "🍰"
      case "Drinks":
        return "🍹"
      default:
        return "🍽️"
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Filter Menu</Text>
        <Text style={styles.headerSubtitle}>Select a course to view</Text>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, selectedCourse === "All" && styles.filterButtonActive]}
          onPress={() => setSelectedCourse("All")}
        >
          <Text style={styles.filterIcon}>{getCourseIcon("All")}</Text>
          <Text style={[styles.filterText, selectedCourse === "All" && styles.filterTextActive]}>All</Text>
        </TouchableOpacity>

        {COURSES.map((course) => (
          <TouchableOpacity
            key={course}
            style={[styles.filterButton, selectedCourse === course && styles.filterButtonActive]}
            onPress={() => setSelectedCourse(course)}
          >
            <Text style={styles.filterIcon}>{getCourseIcon(course)}</Text>
            <Text style={[styles.filterText, selectedCourse === course && styles.filterTextActive]}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filtered Results */}
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>
          {selectedCourse === "All" ? "All Items" : selectedCourse} ({filteredItems.length})
        </Text>

        {filteredItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>No items found</Text>
            <Text style={styles.emptySubtext}>No dishes in this category yet</Text>
          </View>
        ) : (
          filteredItems.map((item) => <MenuCard  item={item} />)
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
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 12,
  },
  filterButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filterButtonActive: {
    backgroundColor: "#8B4513",
    borderColor: "#8B4513",
  },
  filterIcon: {
    fontSize: 20,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  filterTextActive: {
    color: "#fff",
  },
  resultsContainer: {
    padding: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 16,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#8B4513",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#666",
  },
})
