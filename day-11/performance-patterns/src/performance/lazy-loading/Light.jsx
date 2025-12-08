export default function Light() {
    console.log("[Light] rendered");
    return (
        <div style={{ padding: 20 }}>
            <h2>Light Component</h2>
            <p>
                This component is small and always included in the initial
                bundle.
            </p>
        </div>
    );
}
