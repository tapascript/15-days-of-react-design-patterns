/**
 * Simple Card that renders whatever is passed as children.
 * This is the simplest slot: a single, unnamed slot.
 */
export default function DefaultSlotCard({ children }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 16,
                maxWidth: 500,
            }}
        >
            {children}
        </div>
    );
}

/*
Usage:
<DefaultSlotCard>
  <h3>Title</h3>
  <p>Body goes here.</p>
</DefaultSlotCard>
*/
