import { useState } from "react";
import { getUsers } from "../../../utils";
import Users from "./Users";

const UsersSortingDemo = () => {
    const [count, setCount] = useState(0);
    const [users] = useState(() => getUsers()); // assume it returns 10,000 users

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <Users list={users} />
        </>
    );
};

export default UsersSortingDemo;
