/**
 * Main Expo App Entry Point
 *
 * Student: Umumararungu Yan Ritha Uwamariya
 * Student Number: ST10489659
 *
 * This is the root component for the Expo/React Native version of the
 * Chef Christoffel Menu Management App.
 *
 * References:
 * - Expo Documentation (2025) 'Getting Started with Expo', Available at: https://docs.expo.dev/
 * - React Navigation (2025) 'React Navigation Documentation', Available at: https://reactnavigation.org/docs/getting-started
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import ManageScreen from "./Screens/ManageScreen";
import FilterScreen from "./Screens/FilterScreen";
import SplashScreen from "./Screens/SplashScreen";
import { MenuProvider, useMenu } from "./MenuContext";
import { RootStackParamList } from "./types";

export default function App() {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

// Inner component to access context
const AppNavigator: React.FC = () => {
  const { isLoading } = useMenu();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#8B4513" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Chef Christoffel's Menu" }}
        />
        <Stack.Screen
          name="Manage"
          component={ManageScreen}
          options={{ title: "Manage Menu" }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ title: "Filter Menu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};