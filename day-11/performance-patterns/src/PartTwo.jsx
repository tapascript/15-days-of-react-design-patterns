import LazyLoader from "./performance/lazy-loading/LazyLoader";
import NonLazyLoader from "./performance/lazy-loading/NonLazyLoader";
const PartTwo = () => {
    return (
        <>
            <NonLazyLoader />
            <LazyLoader />
        </>
    );
};

export default PartTwo;
