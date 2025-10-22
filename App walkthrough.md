# App Walkthrough — Interactive Demonstration

This walkthrough demonstrates all required features of Christoffel's Menu Management App by describing a realistic, step‑by‑step interactive session in the app. Use this as a testing script, demo script, or user guide to validate functionality.

Last updated: 2025-10-22

---

## Goal

Engage with the app to demonstrate:
- App startup and data loading
- Viewing menu items and statistics
- Adding valid and invalid items (form validation)
- Removing items with confirmation
- Filtering by course type
- Using the Add Samples demo button
- Pull-to-refresh and persistence behavior
- Error scenarios and expected UX responses

Run this walkthrough on a physical Android device with Expo Go or on an emulator.

---

## Preparation

1. Start the app:
   - `npm run dev` in the project root.
   - Open Expo Go and scan the QR code, or press `a` to open an Android emulator.
2. Ensure `.env` is configured with your Supabase project:
   - EXPO_PUBLIC_SUPABASE_URL
   - EXPO_PUBLIC_SUPABASE_ANON_KEY
3. Confirm the `menu_items` table exists in Supabase (id, dish_name, description, course, price, created_at, updated_at).

---

## Walkthrough Steps

Each step includes what to do, what the app should do, and how to verify.

### 1 — Cold start & initial load
- Action:
  - Launch the app.
- Expected behavior:
  - App shows splash/loading state then Home (Menu) screen.
  - MenuContext triggers `fetchMenu()` and the loading indicator appears in the list area.
  - If items exist in Supabase, the list populates; otherwise an empty state appears with "Add Samples" prompt.
- Verify:
  - Loading indicator disappears.
  - Stats section shows totals and averages (0 if empty).
  - No unhandled errors shown to the user.

### 2 — Add a menu item (valid)
- Action:
  - Tap the Add tab (or header + icon).
  - Fill fields:
    - Dish Name: "Herb-Crusted Lamb"
    - Description: "Served with minted peas and roasted carrots."
    - Course: Main
    - Price: 245.00
  - Tap "Add Menu Item".
- Expected behavior:
  - Form validates input and shows spinner on submit.
  - `addItem()` in MenuContext inserts the item in Supabase.
  - On success: navigate back to Home (or show success toast) and item appears at top of the list.
  - Stats update: Total increments, average recalculated.
- Verify:
  - New card shows correct name, course tag "Main", price formatted (ZAR), and description.
  - Stats reflect the new totals and averages.

### 3 — Add a menu item (invalid inputs)
- Action:
  - Try to submit with:
    - Empty Dish Name, or
    - Price = "abc" or negative number.
  - Tap "Add Menu Item".
- Expected behavior:
  - Inline validation messages appear (e.g., "Dish name is required", "Price must be a number greater than 0").
  - No network call performed.
- Verify:
  - The form remains visible with error messages.
  - No new list item appears.

### 4 — Pull-to-refresh
- Action:
  - On Home, pull down the list to refresh.
- Expected behavior:
  - Refresh control shows a loading spinner.
  - `fetchMenu()` runs again and re-syncs with Supabase.
- Verify:
  - Any new items added externally (via Supabase dashboard) appear after refresh.
  - Loading spinner hides after fetch completes.

### 5 — Delete an item (confirmation)
- Action:
  - On a MenuItemCard, tap delete (trash) icon for "Herb-Crusted Lamb".
  - When confirmation alert appears, tap "Cancel" then re-open delete and confirm "Delete".
- Expected behavior:
  - First "Cancel" leaves item intact.
  - On confirm: `deleteItem(id)` is called, item removed in Supabase, and local state updates immediately.
  - Stats update to reflect removal.
- Verify:
  - Card disappears.
  - Total count and averages update correctly.
  - No stale items remain on refresh.

### 6 — Filtering items by course
- Setup:
  - Ensure at least one Starter, one Main, and one Dessert exist (use Add or Add Samples).
- Action:
  - Go to Filter screen and select "Starter". Optionally tap "Apply" or the selection applies immediately.
  - Return to Home (if required).
- Expected behavior:
  - Filter state in MenuContext is set to 'Starter'.
  - Home displays only Starter items.
  - Stats may show both global numbers and filtered counts depending on UI (app displays counts per category plus overall).
- Verify:
  - Only items whose `course === 'Starter'` appear.
  - Counts for each category shown in Filter screen match the actual items (e.g., Starters: 2).
  - Clearing the filter (All) returns full list.

### 7 — Add Samples (demo population)
- Action:
  - On Home's empty state, tap "Add Samples".
- Expected behavior:
  - `populateSamples()` inserts 6 demo items into Supabase and updates local state.
  - The list populates and stats update.
- Verify:
  - Six new cards appear with a mix of Starter/Main/Dessert.
  - You can delete any of these individually.

### 8 — Persistence across app restart
- Action:
  - Close the app (stop Expo) and relaunch.
- Expected behavior:
  - Home shows loading then the same items persisted in Supabase are loaded.
- Verify:
  - Items added earlier are present after restart.
  - Stats match expectations.

### 9 — Offline / network error handling (simulated)
- Action:
  - Disable network or point EXPO_PUBLIC_SUPABASE_URL to an invalid host.
  - Try to fetch, add, or delete an item.
- Expected behavior:
  - The app shows a friendly error message (Alert or Snackbar).
  - Loading states clear and actions are safely re-tryable.
- Verify:
  - User receives actionable message ("Unable to reach server — check connection").
  - No app crash or unhandled exceptions in console.

---

## QA Checklist (Condensed)

- [ ] App launches, and Home loads without console errors.
- [ ] Add flow: valid item is saved and displayed.
- [ ] Add flow: invalid inputs show clear validation messages.
- [ ] Delete flow shows confirmation and removes item.
- [ ] Filter updates the Home list correctly.
- [ ] Pull-to-refresh resyncs with Supabase.
- [ ] Add Samples populates demo data when empty.
- [ ] State persists across app restarts.
- [ ] Graceful error messages shown on network failures.
- [ ] Loading and empty states are present and informative.

---

## Expected UX Details / Notes

- Price formatting: show two decimals and ZAR prefix or suffix (e.g., R 245.00 or 245.00 ZAR).
- Confirmation dialogs: use native Alert for consistency and accessibility.
- Controls: Course selection should be a clearly labeled segmented control or Picker.
- Accessibility: ensure buttons have accessible labels, and color contrast is sufficient for tags.

---

## Test cases (developer-oriented)

1. Add item with maximum-length name and long description -> ensure no layout break.
2. Add item with decimal price -> ensure arithmetic for averages is correct.
3. Rapid add/delete sequence -> ensure local state remains consistent with backend.
4. Simulate slow network -> verify loading states shown; actions are idempotent.
5. Verify RLS rules in Supabase allow read for public and require auth for mutations (or document current behavior).

---

## Troubleshooting hints

- If items do not appear:
  - Check `.env` keys and Supabase table permissions.
  - Run `expo start -c` to clear cache.
- If TypeScript errors block compilation:
  - Run `npm run typecheck` and resolve reported types.
- If image upload planned (future):
  - Ensure CORS and Supabase Storage rules are configured.

---

## Wrap-up

I've prepared this file as a ready-to-run interactive walkthrough you can use to demo and test the app end-to-end. It intentionally covers happy paths, validation paths, and error scenarios so you can verify the implementation against the project requirements.

What's next: I can add this file to the repository (create a branch and open a PR, or push to main) and, if you want, extend the walkthrough with screenshots, short video timestamps for the YouTube demo, or automated test scripts (Jest + React Native Testing Library). Please tell me which commit action you'd like and whether to include screenshots or a short demo clip link.
```
```