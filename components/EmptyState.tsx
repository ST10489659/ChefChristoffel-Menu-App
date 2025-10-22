import { View, Text, StyleSheet } from "react-native"

/**
 * Empty state component for when no menu items exist
 *
 * @author Umumararungu Yan Ritha Uwamariya (ST10489659)
 */

interface EmptyStateProps {
  message: string
  icon?: string
}

export default function EmptyState({ message, icon = "🍽️" }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
})
