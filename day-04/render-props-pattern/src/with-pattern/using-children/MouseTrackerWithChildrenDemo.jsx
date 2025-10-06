import MouseTrackerWithChildren from "./MouseTrackerWithChildren";

const MouseTrackerWithChildrenDemo = () => {
    return (
        <>
            <MouseTrackerWithChildren>
                {({ x, y }) => (
                    <p>
                        🚗 Car is at ({x}, {y})
                    </p>
                )}
            </MouseTrackerWithChildren>

            <MouseTrackerWithChildren>
                {({ x, y }) => (
                    <p>
                        🏍️ Bike is at ({x}, {y})
                    </p>
                )}
            </MouseTrackerWithChildren>
        </>
    );
};

export default MouseTrackerWithChildrenDemo;
