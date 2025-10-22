# Changelog

All notable changes to this project are recorded in this file. This project follows a simple, human-readable changelog format.

## Unreleased
- Polished TypeScript type safety and defensive checks in utilities
- Fix: close JSX expressions and ensure components compile cleanly
- Documentation: improved README and CHANGELOG wording for clarity

---

## [1.0.0] - 2025-10-10
Initial release — a working foundation for a menu management app.

### Added
- Project scaffold with Expo + React Native and TypeScript
- Screens:
  - Home (menu display and analytics)
  - Manage (add/remove menu items)
  - Filter (course-based filtering)
- Components:
  - MenuCard — displays a menu item
  - AddMenuItemForm — add new items with validation
  - AnalyticsCard — shows average prices and counts
  - EmptyState — informative empty-screen UI
- Utilities:
  - menuUtils.ts — calculation helpers (average price, filters)
  - storage helpers — AsyncStorage wrappers for persistence
- Design:
  - Light and dark theme support
  - Simple, consistent color tokens and typography

### Improved
- TypeScript coverage and explicit types for menu data
- Form validation and user-friendly error messages
- Defensive error handling around local storage and JSON parsing

### Technical notes
- Data persisted using AsyncStorage for offline-first usage
- Simple analytics: average price calculated per course
- Localized price display in South African Rands (R)

---

### How we write entries
- Keep entries short and meaningful.
- Group entries under Added, Changed/Improved, Fixed, and Removed where helpful.
- Put the release date beside the version.
- Update the Unreleased section while developing; move entries into a version block when releasing.

If you'd like, I can:
- Commit these updated files to a new branch and open a PR.
- Reformat the changelog to follow Keep a Changelog (keepachangelog.com) strictly.
- Add a release checklist or a GitHub Actions workflow to auto-generate changelog entries from PR titles.

## [2.0.0] - 2025-10-22
Initial stable release
- Core features implemented:
  - Add, view, and remove menu items
  - Course categories: Starter, Main, Dessert
  - Filtering by course
  - Real-time statistics (counts and average prices)
  - Pull-to-refresh and confirmation dialogs
- Supabase integration for persistent storage
- Sample data button for quick demos
- TypeScript with React Context for state management
- Basic error handling and loading/empty states

---
