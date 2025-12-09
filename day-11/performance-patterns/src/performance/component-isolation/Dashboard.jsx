import Revenue from "./Revenue";
import UserCard from "./UserCard";
import Visitors from "./Visitors";
function Dashboard({ user, stats }) {
    return (
        <>
            <UserCard user={user} />
            <Revenue stats={stats} />
            <Visitors />
        </>
    );
}

export default Dashboard;
