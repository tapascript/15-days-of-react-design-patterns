import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Tracks if any child throws an error
    this.state = { hasError: false };
  }

  // Runs when a child component crashes during render
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  // Used for logging & diagnostics
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;