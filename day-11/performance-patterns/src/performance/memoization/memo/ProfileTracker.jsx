import { memo } from "react";

const MemoizedCard = memo(function ProfileCard({ name }) {
    console.log("Rendered <ProfileCard />");
    return <h3>{name}</h3>;
});

export default MemoizedCard;
