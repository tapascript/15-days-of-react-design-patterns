import React, { Suspense, useState } from "react";
import Light from "./Light";

const Heavy = React.lazy(() => import("./Heavy"));

const LazyLoader = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
            <h1>Lazy Demo</h1>
            <p>
                Heavy component is loaded on demand via{" "}
                <code>React.lazy()</code>.
            </p>

            <Light />

            <button onClick={() => setShow((s) => !s)} style={{ margin: 10 }}>
                {show ? "Hide Heavy" : "Show Heavy"}
            </button>

            <Suspense
                fallback={
                    <div style={{ padding: 20 }}>Loading heavy component…</div>
                }
            >
                {show && <Heavy />}
            </Suspense>
        </div>
    );
};

export default LazyLoader;
