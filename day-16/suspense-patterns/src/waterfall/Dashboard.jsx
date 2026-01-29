import { useEffect, useState } from "react";
import { fetchUser, fetchAnalytics, fetchOrders } from "../api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(null);
  const [analytics, setAnalytics] = useState(null);

  // Step 1: Fetch user
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  // Step 2: Fetch orders (depends on user)
  useEffect(() => {
    if (!user) return;
    fetchOrders(user.id).then(setOrders);
  }, [user]);

  // Step 3: Fetch analytics (depends on user)
  useEffect(() => {
    if (!user) return;
    fetchAnalytics(user.id).then(setAnalytics);
  }, [user]);

  if (!user || !orders || !analytics) {
    return <p className="text-xl m-3">Loading dashboard...</p>;
  }

  return (
    <div className="m-2">
      <h1 className="text-5xl">Welcome, {user.name}</h1>

      <h2 className="text-3xl mt-3">Orders</h2>
      <ul>
        {orders.map((o) => (
          <li className="text-xl" key={o}>{o}</li>
        ))}
      </ul>

      <h2 className="text-3xl mt-3">Analytics</h2>
      <p className="text-xl">Revenue: {analytics.revenue}</p>
      <p className="text-xl">Growth: {analytics.growth}</p>
    </div>
  );
}