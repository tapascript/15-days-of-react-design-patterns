# Day 08 - Your Task

“Alright, your task for today

## Build an optimistic comment feature for a mini blog

1. A Post view with existing comments pulled from GET /api/posts/:id/comments. (Use fake-server)

2. A comment form. When user submits:

- Immediately show the comment in the list with a “Sending…” label using useOptimistic().
- Send the comment to the server asynchronously.
- On success, replace the optimistic entry with the server-sent item (with real id and createdAt).
- On failure, remove the optimistic comment and show a toast/error message.
