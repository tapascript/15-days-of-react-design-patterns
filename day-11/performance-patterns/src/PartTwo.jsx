import Dashboard from "./performance/component-isolation/Dashboard";
import IsolatedDashboard from "./performance/component-isolation/IsolatedDashboard";
import DeferredDemo from "./performance/deffered/DeferredDemo";
import LazyLoader from "./performance/lazy-loading/LazyLoader";
import NonLazyLoader from "./performance/lazy-loading/NonLazyLoader";
import TransitionDemo from "./performance/transition/TransitionDemo";
import VirtualizationDemo from "./performance/virtualization/VirtualizationDemo";
const PartTwo = () => {
    return (
        <>
            <LazyLoader />
            <NonLazyLoader />
            <Dashboard />
            <IsolatedDashboard />
            <VirtualizationDemo />
            <TransitionDemo />
            <DeferredDemo />
        </>
    );
};

export default PartTwo;
