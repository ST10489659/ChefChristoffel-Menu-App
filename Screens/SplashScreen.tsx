import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>👨‍🍳</Text>
        <Text style={styles.title}>Chef Christoffel</Text>
        <Text style={styles.subtitle}>Menu Management</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.studentName}>Umumararungu Yan Ritha Uwamariya</Text>
        <Text style={styles.studentNumber}>ST10489659</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B4513",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#f5e6d3",
  },
  footer: {
    alignItems: "center",
  },
  studentName: {
    fontSize: 16,
    color: "#f5e6d3",
    marginBottom: 4,
  },
  studentNumber: {
    fontSize: 14,
    color: "#d4a574",
  },
})
