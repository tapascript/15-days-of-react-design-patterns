export default function CardCompound({ children }) {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: 8 }}>
            {children}
        </div>
    );
}

CardCompound.Header = function Header({ children }) {
    return (
        <div
            style={{
                padding: 12,
                borderBottom: "1px solid #eee",
                background: "#fffbe6",
            }}
        >
            {children}
        </div>
    );
};

CardCompound.Body = function Body({ children }) {
    return <div style={{ padding: 12 }}>{children}</div>;
};

CardCompound.Actions = function Actions({ children }) {
    return (
        <div
            style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
            }}
        >
            {children}
        </div>
    );
};
