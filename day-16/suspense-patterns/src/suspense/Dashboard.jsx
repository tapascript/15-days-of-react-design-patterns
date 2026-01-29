import { Suspense } from "react";
import Analytics from "../components/Analytics";
import ErrorBoundary from "../components/ErrorBoundary";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import {
    AnalyticsSkeleton,
    OrdersSkeleton,
    ProfileSkeleton,
} from "../components/Skeletons";

export default function Dashboard() {
    return (
        <div className="m-2">
            <header>
                <h1 className="text-5xl mb-12">📊 Dashboard</h1>
            </header>

            <ErrorBoundary>
                <Suspense fallback={<ProfileSkeleton />}>
                    <Profile />
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <Suspense fallback={<OrdersSkeleton />}>
                    <Orders />
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <Suspense fallback={<AnalyticsSkeleton />}>
                    <Analytics />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
