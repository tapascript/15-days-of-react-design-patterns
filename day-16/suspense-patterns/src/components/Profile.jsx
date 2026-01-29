import { use } from "react";
import { userResource } from "../resources/userResource";

export default function Profile() {
  const user = use(userResource.userPromise);
  return <h2 className="text-3xl">Welcome, {user.name}</h2>;
}