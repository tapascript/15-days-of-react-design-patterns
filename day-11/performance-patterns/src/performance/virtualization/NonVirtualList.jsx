export default function NonVirtualList({ users }) {
    return (
        <div
            style={{
                height: "600px",
                overflow: "auto",
                border: "1px solid #ddd",
            }}
        >
            {users.map((user) => (
                // We reuse Item visual, but each receives no style height optimization
                <div
                    key={user.id}
                    style={{ padding: 8, borderBottom: "1px solid #eee" }}
                >
                    <div style={{ fontWeight: 600 }}>{user.name}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>
                        {user.email}
                    </div>
                    <div style={{ fontSize: 12 }}>{user.bio}</div>
                </div>
            ))}
        </div>
    );
}
