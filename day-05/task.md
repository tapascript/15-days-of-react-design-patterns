# Day 05 - Your Task

Create a Higher Order Component that injects user data and handles permission-based access into any component. The goal is to learn how to wrap existing components with cross-cutting logic (like authentication or roles) without rewriting them.

You are building an Admin Dashboard for a React app that has multiple pages:

- ProfilePage – displays logged-in user’s info
- AdminPanel – visible only to admins
- ReportsPage – visible only to users with “report” permissions

You already have these components — but each one needs to fetch the user data, check permissions, and conditionally render UI. That’s repeated logic, and the perfect case for an HOC.

## You Need To Do

1. Create a Higher Order Component (HOC) named `withUserDataAndPermissions`.
2. This HOC should:
   - Fetch user data (simulate with a static object).
   - Check if the user has the required permissions.
   - Inject user data and permission status as props into the wrapped component.
3. Wrap the existing components (`ProfilePage`, `AdminPanel`, `ReportsPage`) with this HOC.
4. Each component should render differently based on the injected props:
   - `ProfilePage` should always display user info.
   - `AdminPanel` should only render if the user is an admin; otherwise, show an "Access Denied" message.
   - `ReportsPage` should only render if the user has "report" permissions; otherwise, show an "Access Denied" message.
5. Share the task completed repo on Discord.
