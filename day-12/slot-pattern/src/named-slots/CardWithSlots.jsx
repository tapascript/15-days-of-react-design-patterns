/**
 * Card using named slots via props.
 * Pros: simple, explicit
 * Cons: many props can get awkward when the number of slots grows
 */
export default function CardWithSlots({ header, content, footer, style }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: 10,
                width: 540,
                ...style,
            }}
        >
            <div
                style={{
                    padding: 12,
                    borderBottom: "1px solid #eee",
                    background: "#fff8e6",
                    color: "#333333"
                }}
            >
                {/* header is a slot prop — consumer passes a React node */}
                {header}
            </div>

            <div style={{ padding: 12 }}>
                {/* main content slot */}
                {content}
            </div>

            <div
                style={{
                    padding: 12,
                    borderTop: "1px solid #eee",
                    background: "#f7fff7",
                    color: "#333333"
                }}
            >
                {/* footer slot */}
                {footer}
            </div>
        </div>
    );
}
