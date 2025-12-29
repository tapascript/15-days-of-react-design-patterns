# Day 15 — Your Task

## Goal

Design a product page that never fully crashes, even when parts fail.

## Requirements

- Create a Product page with:
  - Product Details section
  - Reviews section
  - Recommendations section
- Each section must:
  - Be wrapped in its own Error Boundary
  - Have a custom fallback UI
- Randomly throw an error in one section
- Add a Retry button that only re-renders the failed section

## Constraints

- Do NOT use examples from the session
- Do NOT use a single global boundary
- Retry must not refresh the page

## Bonus

- Log component stack info to console
- Add different fallback messages per section
