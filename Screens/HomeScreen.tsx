import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import type { MenuItem, Course } from "../types.ts"
import MenuCard from "../components/MenuCard"
import { useMenu} from '../MenuContext'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "./../types.js"

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp
}


export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { menuItems } = useMenu();

  const calculateAverages = () => {
    const averages: Record<Course, number> = {
      Starters: 0,
      Mains: 0,
      Desserts: 0,
      Drinks: 0,
    }

    const counts: Record<Course, number> = {
      Starters: 0,
      Mains: 0,
      Desserts: 0,
      Drinks: 0,
    }

    // LO1: Using for loop concept via forEach
    menuItems.forEach((item) => {
      averages[item.course] += item.price
      counts[item.course]++
    })

    Object.keys(averages).forEach((course) => {
      const key = course as Course
      if (counts[key] > 0) {
        averages[key] = averages[key] / counts[key]
      }
    })

    return averages
  }

  const averages = calculateAverages()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to Chef Christoffel's Menu</Text>
        <Text style={styles.headerSubtitle}>Personalized Culinary Experiences</Text>
      </View>

      {/* Analytics Section */}
      <View style={styles.analyticsContainer}>
        <Text style={styles.sectionTitle}>Menu Analytics</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{menuItems.length}</Text>
            <Text style={styles.statLabel}>Total Items</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>R{averages.Starters.toFixed(2)}</Text>
            <Text style={styles.statLabel}>Avg Starters</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>R{averages.Mains.toFixed(2)}</Text>
            <Text style={styles.statLabel}>Avg Mains</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>R{averages.Desserts.toFixed(2)}</Text>
            <Text style={styles.statLabel}>Avg Desserts</Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Our Menu</Text>
        {menuItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🍽️</Text>
            <Text style={styles.emptyText}>No menu items yet</Text>
            <Text style={styles.emptySubtext}>The chef hasn't added any dishes yet</Text>
          </View>
        ) : (
          menuItems.map((item) => <MenuCard item={item} />)
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Filter")}>
          <Text style={styles.buttonText}>Filter Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate("Manage")}>
          <Text style={styles.buttonText}>Manage Menu</Text>
        </TouchableOpacity>
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
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#f5e6d3",
  },
  analyticsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  menuContainer: {
    padding: 16,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
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
  buttonContainer: {
    padding: 16,
    gap: 12,
  },
  button: {
    backgroundColor: "#8B4513",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#d4a574",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
