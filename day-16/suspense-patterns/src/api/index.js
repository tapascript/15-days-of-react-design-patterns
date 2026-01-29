import { getTime } from "../util";
export function fetchUser() {
    console.log(`Fteching User`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Tapas" });
            console.log(`Fetched User at ${getTime()}`);
        }, 1000);
    });
}

export function fetchOrders(userId) {
    console.log(`Fteching order for user ${userId}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Order 1", "Order 2", "Order 3"]);
            console.log(`Fetched Order at ${getTime()}`);
        }, 1500);
    });
}

export function fetchAnalytics(userId) {
    console.log(`Fteching Analytics for user ${userId}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ revenue: "$12,000", growth: "18%" });
            console.log(`Fetched Analytics at ${getTime()}`);
        }, 2500);
    });
}
