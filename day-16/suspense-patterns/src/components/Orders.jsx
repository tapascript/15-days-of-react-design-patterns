import { use } from "react";
import { getUserResources } from "../resources/userResource";

export default function Orders() {
   const { ordersPromise } = getUserResources();
  const orders = use(ordersPromise);

  return (
    <>
      <h2 className="text-3xl mt-2">Orders</h2>
      <ul>
        {orders.map((o) => (
          <li className="text-xl" key={o}>{o}</li>
        ))}
      </ul>
    </>
  );
}