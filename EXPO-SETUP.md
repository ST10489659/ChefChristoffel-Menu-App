# Expo Quick-Start Setup Guide

**Student:** Umumararungu Yan Ritha Uwamariya  
**Student Number:** ST10489659

## Quick Setup Instructions

### Step 1: Create New Expo Project

\`\`\`bash
npx create-expo-app@latest ChefChristoffelMenu
cd ChefChristoffelMenu
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-native-async-storage/async-storage
npm install @react-native-picker/picker
\`\`\`

### Step 3: Copy Files

Copy all files from the `expo-app` folder into your new Expo project:

- `App.tsx` → Replace the default App.tsx
- `types.ts` → Root directory
- `screens/` folder → Create and copy all screen files
- `components/` folder → Create and copy all component files

### Step 4: Run the App

\`\`\`bash
npx expo start
\`\`\`

Then:
- Press `a` for Android emulator
- Press `i` for iOS simulator (Mac only)
- Scan QR code with Expo Go app on your phone

## Project Structure

\`\`\`
ChefChristoffelMenu/
├── App.tsx                 # Main entry point
├── types.ts               # TypeScript types
├── screens/
│   ├── SplashScreen.tsx   # Splash screen with student info
│   ├── HomeScreen.tsx     # Menu display & analytics
│   ├── ManageScreen.tsx   # Add/remove menu items
│   └── FilterScreen.tsx   # Filter by course
└── components/
    └── MenuCard.tsx       # Menu item card component
\`\`\`

## Features Included

✅ Splash screen with student information  
✅ Menu display with analytics  
✅ Add/remove menu items  
✅ Filter by course (Starters, Mains, Dessert)  
✅ Form validation with error handling  
✅ AsyncStorage for data persistence  
✅ South African Rands (R) currency  
✅ Course-specific icons and colors  
✅ Empty states for better UX  

## Learning Outcomes Demonstrated

- **LO1:** For loops (via map/forEach)
- **LO2:** While loops (via filter operations)
- **LO4:** Function definitions
- **LO5:** Global variables (Course types)
- **LO6:** Code organization with functions

## Troubleshooting

**Error: Cannot find module '@react-navigation/native'**
- Run: `npm install @react-navigation/native @react-navigation/native-stack`

**Error: AsyncStorage not found**
- Run: `npx expo install @react-native-async-storage/async-storage`

**App crashes on startup**
- Make sure all dependencies are installed
- Try: `npm install` then `npx expo start --clear`

## Testing on Physical Device

1. Install "Expo Go" app from App Store (iOS) or Play Store (Android)
2. Run `npx expo start` in terminal
3. Scan the QR code with your phone camera
4. App will open in Expo Go

## Next Steps

1. Test all features (add, remove, filter)
2. Add sample menu items
3. Test on multiple screen sizes
4. Create your video walkthrough
5. Push to GitHub

## References

- Expo Documentation (2025) Available at: https://docs.expo.dev/
- React Navigation (2025) Available at: https://reactnavigation.org/
- React Native Documentation (2025) Available at: https://reactnative.dev/
