import {memo} from "react";

import Revenue from "./Revenue";
import UserCard from "./UserCard";
import Visitors from "./Visitors";

const MUserCard = memo(UserCard);
const MRevenue = memo(Revenue);

const IsolatedDashboard = ({ user, stats }) => {
    return (
        <>
            <MUserCard user={user} />
            <MRevenue stats={stats} />
            <Visitors />
        </>
    );
};

export default IsolatedDashboard;
