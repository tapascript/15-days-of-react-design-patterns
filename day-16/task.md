# Day 16 — Your Task

## Goal

Build a Notifications Center using React 19’s use() API, Suspense, and Error Boundaries.

The focus is on:

- Modeling async data correctly
- Coordinating rendering using Suspense
- Handling failure gracefully using Error Boundaries

## Product Requirements

You are building a Notifications Center for an application.

The page should show:

- Logged-in user summary
- Unread notifications
- Notification preferences

Data Dependencies (Must Be Followed)

- User data must load first
- Notifications depend on userId
- Preferences depend on userId
- Notifications and preferences can load in parallel after user

These dependencies are real and must not be removed or faked.

## Technical Requirements

You must use:

- use() for data consumption
- Suspense for loading states
- ErrorBoundary for failure handling

You must NOT use:

- useEffect for fetching
- useState for loading flags
- Page reload for retry
- One giant Suspense boundary
