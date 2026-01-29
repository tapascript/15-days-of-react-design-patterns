import { fetchAnalytics, fetchOrders, fetchUser } from "../api";

const userPromise = fetchUser();
const ordersPromise = userPromise.then((user) => fetchOrders(user.id));
const analyticsPromise = userPromise.then((user) => fetchAnalytics(user.id));

export const userResource = {
    userPromise,
    ordersPromise,
    analyticsPromise,
};
