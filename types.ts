/**
 * TypeScript Type Definitions for Menu Management App
 *
 * Student: Umumararungu Yan Ritha Uwamariya
 * Student Number: ST10489659
 *
 * Learning Outcomes Demonstrated:
 * - LO5: Use Global variables (Course type)
 * - LO4: Define a function in TypeScript (type definitions for functions)
 *
 * References:
 * - TypeScript Documentation (2025) 'TypeScript Handbook', Available at: https://www.typescriptlang.org/docs/
 */

export type MenuItem = {
  id: string,
  name: string,
  course: Course,
  description: string,
  price: number,
}

export type Course = "Starters" | "Mains" | "Desserts" | "Drinks"

export const COURSES: Course[] = ["Starters", "Mains", "Desserts", "Drinks"]

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Manage: undefined;
  Filter: undefined;
};