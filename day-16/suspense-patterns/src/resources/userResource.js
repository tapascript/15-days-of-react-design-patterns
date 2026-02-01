import { fetchAnalytics, fetchOrders, fetchUser } from "../api";

let userPromise;
let ordersPromise;
let analyticsPromise;

export function createUserResources() {
  userPromise = fetchUser();

  ordersPromise = userPromise.then(user =>
    fetchOrders(user.id)
  );

  analyticsPromise = userPromise.then(user =>
    fetchAnalytics(user.id)
  );
}

export function getUserResources() {
  return {
    userPromise,
    ordersPromise,
    analyticsPromise
  };
}