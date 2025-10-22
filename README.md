# Chef Christoffel — Menu Management App

A small, friendly example app for managing a restaurant menu. Built with Expo (React Native) and TypeScript, this project is intended as a learning scaffold that demonstrates app structure, form handling, local persistence, and simple analytics.

Why this project
- To provide a compact, working example of a TypeScript React Native app.
- To demonstrate common mobile patterns: forms, validation, local storage, and simple analytics.
- To be an approachable starting point for students and developers learning mobile development.

Highlights
- Add, view, and remove menu items
- Organize items by course: Starters, Mains, Dessert
- Data persistence with AsyncStorage (offline-friendly)
- Simple analytics: average price calculations per course
- Light / dark theme support and responsive components
- TypeScript-first: shared types and defensive utilities

Quick start (development)
1. Clone the repository:
   git clone https://github.com/ST10489659/ChefChristoffelMenu.git
2. Install dependencies:
   npm install
   or
   yarn
3. Start the Expo dev server:
   npx expo start
   - Use the Expo DevTools or the QR code to run the app on device or simulator.

Common npm scripts
- Start dev server: npm start (alias for npx expo start)
- Lint: npm run lint
- Format: npm run format
- (If configured) Build: expo build or use EAS Build

Project structure (overview)
- /app or /Screens — Screen components and routing
- /components — Reusable UI components (MenuCard, AddMenuItemForm, EmptyState)
- /utils — Helper functions (menu calculations, AsyncStorage helpers)
- /assets — Images and static resources
- /scripts — Project helper scripts (project reset, scaffolding)
- types.ts — Shared TypeScript types used across the app

Developer notes
- Types: types.ts holds MenuItem and Course definitions; utilities return safe defaults to avoid runtime exceptions.
- Defensive code: utilities validate inputs and guard against NaN / missing values.
- Style: small, focused components make behavior easier to reason about and test.

Troubleshooting tips
- App doesn’t start: check that Expo CLI is installed and your environment variables are correct.
- Images not loading: confirm the correct relative path under /assets and use require() when using React Native static images.
- Storage issues: if AsyncStorage parse fails, clear the app storage and re-add sample data.

Contributing
- Found a bug or an improvement? Open an issue with a clear description and steps to reproduce.
- For code changes: create a branch, make focused changes, and open a pull request with a description of what you changed and why.
- Keep changes small and add notes about how to verify the behavior manually.

Author & attribution
- Author: Umumararungu Yan Ritha Uwamariya (ST10489659)

License
- Add a LICENSE file to indicate the project's license (MIT is a common choice).