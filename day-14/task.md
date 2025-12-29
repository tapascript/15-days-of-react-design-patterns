# Day 14 — Your Task

## Task 1: Profile Facade

Create a `useProfileFacade` that combines:

- User details
- Profile completion percentage
- Account status

Expose only UI-ready fields like:

- `isProfileComplete`
- `canEditProfile`

## Task 2: Shopping Cart Facade

Build a facade that combines:

- Cart items
- Price calculation
- Discount logic

Expose:

- `totalPrice`
- `hasDiscount`
- `checkout()`

## Task 3: Notifications Facade (Advanced)

Create a facade that:

- Fetches notifications
- Groups them by type
- Exposes unread count

UI should never handle raw notification arrays.
