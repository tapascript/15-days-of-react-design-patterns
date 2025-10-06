import MouseTracker from "./MouseTracker";

const MouseTrackerDemo = () => {
    return (
        <>
            <MouseTracker
                render={(pos) => (
                    <p>
                        🚗 Car is at ({pos.x}, {pos.y})
                    </p>
                )}
            />
            <MouseTracker
                render={({ x, y }) => (
                    <p>
                        🏍️ Bike is at ({x}, {y})
                    </p>
                )}
            />
        </>
    );
};

export default MouseTrackerDemo;
