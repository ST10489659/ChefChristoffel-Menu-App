import type { MenuItem, Course } from "../types"

/**
 * Utility functions for menu calculations and operations
 *
 * Learning Outcomes Demonstrated:
 * - Use functions to organise code (LU6)
 * - Use a for loop to solve programming problems (LU1)
 * - Use Global variables (LU5)
 *
 * References:
 * - TypeScript Functions: https://www.typescriptlang.org/docs/handbook/2/functions.html
 * - Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * @author Umumararungu Yan Ritha Uwamariya (ST10489659)
 */

/**
 * Calculate average price for a specific course
 * Uses a for loop to iterate through menu items (LU1)
 */
export function calculateAveragePrice(items: MenuItem[], course: Course): number {
  let total = 0
  let count = 0

  // Using for loop as per LU1 requirement
  for (let i = 0; i < items.length; i++) {
    if (items[i].course === course) {
      total += items[i].price
      count++
    }
  }

  return count > 0 ? total / count : 0
}

/**
 * Calculate average prices for all courses
 */
export function calculateAllAveragePrices(items: MenuItem[]): {
  Starters: number
  Mains: number
  Desserts: number
  Drinks: number
} {
  return {
    Starters: calculateAveragePrice(items, "Starters"),
    Mains: calculateAveragePrice(items, "Mains"),
    Desserts: calculateAveragePrice(items, "Desserts"),
    Drinks: calculateAveragePrice(items, "Drinks"),
  }
}

/**
 * Filter menu items by course
 */
export function filterByCourse(items: MenuItem[], course: Course | "All"): MenuItem[] {
  if (course === "All") {
    return items
  }
  return items.filter((item) => item.course === course)
}

/**
 * Get count of items per course
 */
export function getCourseCounts(items: MenuItem[]): {
  Starters: number
  Mains: number
  Desserts: number
  Drinks: number
} {
  const counts = { Starters: 0, Mains: 0, Desserts: 0, Drinks: 0 }

  for (let i = 0; i < items.length; i++) {
    counts[items[i].course]++
  }

  return counts
}
