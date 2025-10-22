import { View, Text, StyleSheet } from "react-native"

type Course = "Starters" | "Mains" | "Dessert" | string

interface MenuItem {
  name: string
  description: string
  price: number
  course: Course
}

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  const getCourseColor = (course: Course): string => {
    switch (course) {
      case "Starters":
        return "#10b981"
      case "Mains":
        return "#f59e0b"
      case "Dessert":
        return "#ec4899"
      default:
        return "#8B4513"
    }
  }

  const getCourseIcon = (course: Course): string => {
    switch (course) {
      case "Starters":
        return "🥗"
      case "Mains":
        return "🍖"
      case "Dessert":
        return "🍰"
      default:
        return "🍽️"
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.icon}>{getCourseIcon(item.course)}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={[styles.courseBadge, { backgroundColor: getCourseColor(item.course) }]}>
          <Text style={styles.courseText}>{item.course}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  icon: {
    fontSize: 24,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  courseBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  courseText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4513",
  },
})
