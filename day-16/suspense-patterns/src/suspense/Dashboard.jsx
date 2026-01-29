import { Suspense } from "react";
import Profile from "../components/Profile";
import Orders from "../components/Orders";
import Analytics from "../components/Analytics";
import {
  ProfileSkeleton,
  OrdersSkeleton,
  AnalyticsSkeleton
} from "../components/Skeletons";

export default function Dashboard() {
  return (
    <div className="m-2">
      <header>
        <h1 className="text-5xl mb-12">📊 Dashboard</h1>
      </header>

      <Suspense fallback={<ProfileSkeleton />}>
        <Profile />
      </Suspense>

      <Suspense fallback={<OrdersSkeleton />}>
        <Orders />
      </Suspense>

      <Suspense fallback={<AnalyticsSkeleton />}>
        <Analytics />
      </Suspense>
    </div>
  );
}