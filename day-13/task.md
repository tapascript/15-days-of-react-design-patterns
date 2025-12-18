# Day 13 - Your Task

## App-Level Data Fetching with Strategy Pattern in React

The goal of this assignment is to **apply the Strategy Pattern in React** using:

- Custom Hooks
- Hook Factory
- React Context

You will design an **app-level architecture** that allows switching between multiple data sources **without changing any component code**.

## Scenario

You are building a React application that needs to **fetch user information**.

Depending on the environment or configuration, the user data may come from:

1. **REST API**
2. **GraphQL API**
3. **In-memory JSON data**

⚠️ Important:
You **do NOT need to implement actual API calls**.
Each data source can return **mocked/static data**.

This assignment is about **architecture and patterns**, not networking.

## Requirements

### Create Separate Strategy Hooks

Create **three independent hooks**, one for each data source:

- `useRestUsers`
- `useGraphQLUsers`
- `useInMemoryUsers`

Each hook must:

- Return user data in the **same shape**
- Hide its internal implementation
- Be reusable and testable

Example return shape:

```js
{
  users: [],
  isLoading: false
}
