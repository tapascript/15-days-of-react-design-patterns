import { useMemo } from "react";

export function useFakeUsers(count = 50000) {
    return useMemo(() => {
        const users = new Array(count);
        for (let i = 0; i < count; i++) {
            users[i] = {
                id: i,
                name: `User ${i}`,
                email: `user${i}@example.com`,
                bio: `Short bio for user ${i} — generated for demo.`,
            };
        }
        return users;
    }, [count]);
}
