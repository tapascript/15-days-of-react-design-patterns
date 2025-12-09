import { memo } from "react";

export const Item = memo(function Item({ index, style, data }) {
    const user = data[index];

    console.log("Render row:", index);

    return (
        <div
            style={{
                ...style,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "8px 12px",
                boxSizing: "border-box",
                borderBottom: "1px solid #eee",
                background: index % 2 ? "#fff" : "#fafafa",
            }}
        >
            <div style={{ fontWeight: 600 }}>{user.name}</div>
            <div style={{ fontSize: 12, color: "#666" }}>{user.email}</div>
            <div style={{ fontSize: 12 }}>{user.bio}</div>
        </div>
    );
});
