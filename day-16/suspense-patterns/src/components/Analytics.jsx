import { use } from "react";
import { getUserResources } from "../resources/userResource";

export default function Analytics() {
    const { analyticsPromise } = getUserResources();
    const analytics = use(analyticsPromise);

    return (
        <>
            <h2 className="text-3xl mt-2">Analytics</h2>
            <p className="text-xl">Revenue: {analytics.revenue}</p>
            <p className="text-xl">Growth: {analytics.growth}</p>
        </>
    );
}
