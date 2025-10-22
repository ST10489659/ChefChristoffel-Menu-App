import AsyncStorage from "@react-native-async-storage/async-storage"
import type { MenuItem } from "../types"

/**
 * AsyncStorage utility functions for data persistence
 *
 * References:
 * - AsyncStorage: https://react-native-async-storage.github.io/async-storage/
 *
 * @author Umumararungu Yan Ritha Uwamariya (ST10489659)
 */

const MENU_ITEMS_KEY = "@menu_items"

/**
 * Save menu items to AsyncStorage
 */
export async function saveMenuItems(items: MenuItem[]): Promise<void> {
  try {
    const jsonValue = JSON.stringify(items)
    await AsyncStorage.setItem(MENU_ITEMS_KEY, jsonValue)
  } catch (error) {
    console.error("Error saving menu items:", error)
    throw new Error("Failed to save menu items")
  }
}

/**
 * Load menu items from AsyncStorage
 */
export async function loadMenuItems(): Promise<MenuItem[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(MENU_ITEMS_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : []
  } catch (error) {
    console.error("Error loading menu items:", error)
    return []
  }
}

/**
 * Clear all menu items from AsyncStorage
 */
export async function clearMenuItems(): Promise<void> {
  try {
    await AsyncStorage.removeItem(MENU_ITEMS_KEY)
  } catch (error) {
    console.error("Error clearing menu items:", error)
    throw new Error("Failed to clear menu items")
  }
}
