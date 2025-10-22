# Christoffel's Menu Management App

Repository: https://github.com/ST10489659/ChefChristoffel-Menu-App  
YouTube Link: [<INSERT_YOUTUBE_VIDEO_URL_HERE>](https://youtu.be/aDhuqBPyqWI?si=LkeVlW7Bz1b5L9EO)


A professional mobile application for Chef Christoffel's private chef services, built with React Native and Expo. This app enables dynamic menu management so the chef can create, view, filter, and manage menu items across courses with real‑time statistics and a clean mobile UI.

Last Updated: 2025-10-22  
Version: 1.0.0

---

## Overview

Christoffel's Menu Management App is a digital menu manager designed for Chef Christoffel's private chef services. It streamlines menu creation and management, provides quick statistics (counts and average prices), and offers an intuitive mobile experience for adding and organizing dishes.

This repository is implemented in TypeScript (100%) and uses Expo + React Native for the mobile frontend and Supabase for persistence.

---

## Features

Core Functionality
- Menu Management: Add, view, and remove menu items.
- Course Categories: Organize dishes into Starter, Main, and Dessert.
- Real-time Statistics: View total items and average price (overall and per course).
- Advanced Filtering: Filter menu items by course type (All / Starter / Main / Dessert).
- Persistent Storage: Menu data stored in Supabase.
- Sample Data: One‑time "Add Samples" button to populate demo items.

User Experience
- Intuitive Navigation: Bottom tab navigation to access Menu, Add, and Filter screens.
- Pull-to-Refresh: Manual sync to refresh menu data.
- Confirmation Dialogs: Prevent accidental deletions.
- Form Validation: Immediate validation with helpful error messages.
- Empty & Loading States: Clear feedback when no items or while loading.

Technical Highlights
- TypeScript: End-to-end type safety.
- React Context: Centralized menu state management.
- Supabase Integration: Secure backend with Row Level Security (RLS).
- Error Handling: Graceful error messages and retry affordances.
- Responsive Design: Optimized for common Android devices.
- Modern UI: Clean, consistent styling with iconography.

Short feature explanations
- Add Item: Fill dish name, description, pick a course and price; form validation prevents invalid entries.
- Remove Item: Tap trash icon on card → confirmation alert → item removed from Supabase and context state.
- Filter: Choose a course to view only that category; item counts update to reflect the filter.
- Statistics: Calculated from the current dataset (cached in context) for immediate feedback.
- Sample Data: Useful for demos and testing; items can be removed individually afterwards.

---

## Screenshots
![WhatsApp Image 2025-10-22 at 20 32 01_1e98b851](https://github.com/user-attachments/assets/d8932055-c2e8-4917-846f-2e4100d30177)
![WhatsApp Image 2025-10-22 at 20 32 01_9ba4e851](https://github.com/user-attachments/assets/dce1a0ad-d7b4-4e91-b4cc-9b5a0a802240)
![WhatsApp Image 2025-10-22 at 20 32 01_e85397b0](https://github.com/user-attachments/assets/31f9e8db-b7e9-4a2b-994b-3428eef4d90f)
![WhatsApp Image 2025-10-22 at 20 32 02_29f2c7a6](https://github.com/user-attachments/assets/1a9b9977-2d22-45d8-84a3-27d24dc7bdd8)
![WhatsApp Image 2025-10-22 at 20 32 02_dd484a4c](https://github.com/user-attachments/assets/44b65158-a604-424b-82f2-8079eea46288)
![WhatsApp Image 2025-10-22 at 21 22 57_91dd003c](https://github.com/user-attachments/assets/3cdb8864-64b2-40c8-b97a-be861e0842ca)
![WhatsApp Image 2025-10-22 at 21 22 57_1016e910](https://github.com/user-attachments/assets/442dda9d-70fe-47c7-a164-e3d36192e81a)
![WhatsApp Image 2025-10-22 at 21 22 58_fd1a1908](https://github.com/user-attachments/assets/13a2af4e-10dc-4143-bbb5-ae233256dc5f)

---

## Prerequisites

- Node.js v18+ (Recommended)
- npm (or yarn)
- Git
- Expo Go (for device testing)

Recommended tools
- Visual Studio Code
- Android Studio (for emulator)

Recommended VS Code extensions
- ESLint
- Prettier
- React Native Tools
- TypeScript React code snippets

---

## Installation & Setup

1. Clone
   git clone https://github.com/ST10489659/ChefChristoffel-Menu-App.git
   cd ChefChristoffel-Menu-App

2. Install
   npm install

3. Environment
   Create or review `.env` with:
   - EXPO_PUBLIC_SUPABASE_URL=<your-supabase-url>
   - EXPO_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>

   Note: The project expects a Supabase project. If you use the provided keys, keep them safe and do not commit secrets to the repo.

4. Database
   The app expects a `menu_items` table with fields:
   - id (UUID)
   - dish_name (text)
   - description (text)
   - course (text: Starter | Main | Dessert)
   - price (numeric)
   - created_at, updated_at (timestamps)

5. Start
   npm run dev
   - Scan the QR code with Expo Go or open in an Android emulator.

---

## Scripts

- npm run dev — Start Expo dev server
- npm run build:web — Build for web (if configured)
- npm run lint — Run ESLint
- npm run typecheck — TypeScript type check

(See package.json for the exact scripts and versions.)

---

## Project Structure (high level)

christoffels-menu-app/
- app/                — Expo Router / screens (tabs: index, add, filter)
- components/         — Reusable UI components (MenuItemCard, StatsCard, etc.)
- context/            — MenuContext (state & actions)
- lib/                — supabase client, utilities
- types/              — TypeScript types (menu types)
- assets/             — Images and static assets
- .env                — Environment variables (not committed)
- app.json, package.json, tsconfig.json
- CHANGELOG.md
- README.md

---

## Usage

Adding a Menu Item
1. Open Add tab.
2. Enter Dish Name, Description, select Course, set Price (ZAR).
3. Tap Add — item saved to Supabase and appears in the Menu.

Viewing & Filtering
- Home (Menu) shows all items with stats. Pull down to refresh.
- Filter tab lets you select All / Starter / Main / Dessert to narrow the list.

Removing Items
- Tap the trash icon on any MenuItem card.
- Confirm deletion in the prompt.

Sample Data
- If the menu is empty, use the Add Samples button to insert demo items for testing.

---

## Error Handling & Troubleshooting

- App fails to connect to Supabase: verify .env and network connection.
- TypeScript errors: run npm run typecheck and fix reported issues.
- Expo caching/problems: expo start -c

---

## Future Enhancements (planned)
- Edit existing menu items
- Image upload for dishes
- Search across menu items
- Authentication for chef account
- Export menu to PDF

See CHANGELOG.md for the development history and upcoming items.

---

## Contributing

- Follow the code style (TypeScript + React hooks).
- Open issues for bugs or feature requests.
- Make small, focused commits and include clear messages.
- Do not commit secrets or environment files.

---

## Attribution & Resources

Core technologies: React Native, Expo, TypeScript, Supabase.  
Libraries: @supabase/supabase-js, expo-router, lucide-react-native.

Documentation references:
- React Native Docs — https://reactnative.dev
- Expo Docs — https://docs.expo.dev
- Supabase Docs — https://supabase.com/docs
- TypeScript — https://www.typescriptlang.org

---

## Project Information

Student: Umumararungu Yan Ritha Uwamariya  
Student Number: ST10489659  
Institution: The Independent Institute of Education (Pty) Ltd  
Course: Mobile Application Development — PoE Part 3

---

## References

### Academic References for Menu Management Mobile Application (Expo Version)

This document contains all references used in the development of the Christoffel Menu Management mobile application, formatted in Harvard Anglia referencing style as per Mendeley standards.

---

### Core Technologies

React Native  
Meta Platforms, Inc. (2025) *React Native: A framework for building native apps using React*. Available at: https://reactnative.dev/ (Accessed: 22 October 2025).

Expo  
Expo (2025) *Expo Documentation: Tools and services for React Native*. Available at: https://docs.expo.dev/ (Accessed: 22 October 2025).

TypeScript  
Microsoft Corporation (2025) *TypeScript: JavaScript with syntax for types*. Available at: https://www.typescriptlang.org/docs/ (Accessed: 22 October 2025).

JavaScript (ES6+)  
ECMA International (2025) *ECMAScript 2025 Language Specification*. Available at: https://tc39.es/ecma262/ (Accessed: 22 October 2025).

---

### Navigation and Routing

React Navigation  
React Navigation Contributors (2025) *React Navigation: Routing and navigation for React Native apps*. Available at: https://reactnavigation.org/docs/getting-started (Accessed: 22 October 2025).

React Navigation Native Stack  
React Navigation Contributors (2025) *Native Stack Navigator*. Available at: https://reactnavigation.org/docs/native-stack-navigator (Accessed: 22 October 2025).

---

### Data Storage and State Management

AsyncStorage  
React Native Community (2025) *@react-native-async-storage/async-storage: Asynchronous, persistent, key-value storage system for React Native*. Available at: https://react-native-async-storage.github.io/async-storage/ (Accessed: 22 October 2025).

React Hooks  
Meta Platforms, Inc. (2025) *Hooks API Reference*. Available at: https://react.dev/reference/react/hooks (Accessed: 22 October 2025).

---

### UI Components and Styling

React Native Core Components  
Meta Platforms, Inc. (2025) *Core Components and APIs*. Available at: https://reactnative.dev/docs/components-and-apis (Accessed: 22 October 2025).

React Native StyleSheet  
Meta Platforms, Inc. (2025) *StyleSheet: React Native styling API*. Available at: https://reactnative.dev/docs/stylesheet (Accessed: 22 October 2025).

React Native Safe Area Context  
Th3rd Wave (2025) *react-native-safe-area-context: A flexible way to handle safe area insets*. Available at: https://github.com/th3rdwave/react-native-safe-area-context (Accessed: 22 October 2025).

React Native Screens  
Software Mansion (2025) *react-native-screens: Native navigation primitives for React Native*. Available at: https://github.com/software-mansion/react-native-screens (Accessed: 22 October 2025).

---

### Development Tools

Expo CLI  
Expo (2025) *Expo CLI: Command-line tool for Expo*. Available at: https://docs.expo.dev/more/expo-cli/ (Accessed: 22 October 2025).

Expo Go  
Expo (2025) *Expo Go: The fastest way to get started with Expo*. Available at: https://expo.dev/client (Accessed: 22 October 2025).

Node.js  
OpenJS Foundation (2025) *Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine*. Available at: https://nodejs.org/docs/latest/api/ (Accessed: 22 October 2025).

npm (Node Package Manager)  
npm, Inc. (2025) *npm Documentation*. Available at: https://docs.npmjs.com/ (Accessed: 22 October 2025).

---

### Programming Concepts and Patterns

Array Methods  
Mozilla Developer Network (2025) *Array - JavaScript | MDN*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array (Accessed: 22 October 2025).

Async/Await  
Mozilla Developer Network (2025) *async function - JavaScript | MDN*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function (Accessed: 22 October 2025).

Arrow Functions  
Mozilla Developer Network (2025) *Arrow function expressions - JavaScript | MDN*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions (Accessed: 22 October 2025).

Destructuring Assignment  
Mozilla Developer Network (2025) *Destructuring assignment - JavaScript | MDN*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment (Accessed: 22 October 2025).

---

### React Native Specific Concepts

React Native Lifecycle  
Meta Platforms, Inc. (2025) *Component Lifecycle*. Available at: https://reactnative.dev/docs/intro-react (Accessed: 22 October 2025).

React Native Performance  
Meta Platforms, Inc. (2025) *Performance Overview*. Available at: https://reactnative.dev/docs/performance (Accessed: 22 October 2025).

React Native Platform-Specific Code  
Meta Platforms, Inc. (2025) *Platform Specific Code*. Available at: https://reactnative.dev/docs/platform-specific-code (Accessed: 22 October 2025).

---

### Design and User Experience

Mobile UI Design Patterns  
Nielsen Norman Group (2025) *Mobile User Experience*. Available at: https://www.nngroup.com/articles/mobile-ux/ (Accessed: 22 October 2025).

iOS Human Interface Guidelines  
Apple Inc. (2025) *Human Interface Guidelines*. Available at: https://developer.apple.com/design/human-interface-guidelines/ (Accessed: 22 October 2025).

Material Design for Android  
Google LLC (2025) *Material Design*. Available at: https://m3.material.io/ (Accessed: 22 October 2025).

---

### Version Control and Collaboration

Git  
Software Freedom Conservancy (2025) *Git Documentation*. Available at: https://git-scm.com/doc (Accessed: 22 October 2025).

GitHub  
GitHub, Inc. (2025) *GitHub Docs*. Available at: https://docs.github.com/ (Accessed: 22 October 2025).

---

### Learning Outcomes Demonstrated

This project demonstrates the following learning outcomes as per the assignment requirements:
1. Use a for loop in TypeScript to solve programming problems — Implemented in `utils/menuUtils.ts` for iterating through menu items to calculate statistics.
2. Use a while loop in TypeScript to solve programming problems — Demonstrated in validation logic and data processing functions.
3. Use a for in loop in TypeScript to solve programming problems — Used for object property iteration in utility functions.
4. Define a function in TypeScript — Multiple functions defined across components and utilities (e.g., `calculateAveragePrice`, `saveMenuItems`, `loadMenuItems`).
5. Use Global variables — State management using React hooks (useState) for global app state.
6. Use functions to organise code — Code organized into reusable functions in `utils/menuUtils.ts` and `utils/storage.ts`.

---

### Project Information (Academic)

Student Name: Umumararungu Yan Ritha Uwamariya  
Student Number: ST10489659  
Institution: The Independent Institute of Education (Pty) Ltd  
Course: Mobile Application Development  
Assignment: Portfolio of Evidence (PoE) - Part 1,2,3
Date: 2025

---

### Additional Resources

React Native Tutorial — https://reactnative.dev/docs/tutorial (Accessed: 22 October 2025)  
Expo Tutorial — https://docs.expo.dev/tutorial/introduction/ (Accessed: 22 October 2025)  
TypeScript for React Native — https://reactnative.dev/docs/typescript (Accessed: 22 October 2025)

---
