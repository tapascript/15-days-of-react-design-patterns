import { use } from "react";
import { userResource } from "../resources/userResource";

export default function Orders() {
  const orders = use(userResource.ordersPromise);

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