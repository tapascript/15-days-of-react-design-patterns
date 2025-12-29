import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error, info) {
        console.error("Error:", error.message);
        console.error("Component stack:", info.componentStack);
    }

    render() {
        const { hasError, error } = this.state;
        const { fallback: Fallback, children } = this.props;

        if (hasError) {
            return <Fallback error={error} />;
        }

        return <div>{children}</div>;
    }
}

export default ErrorBoundary;
