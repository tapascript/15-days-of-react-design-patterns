import { Component } from "react";
import { createUserResources } from "../resources/userResource";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  handleRetry = () => {
    this.setState({ error: null });
    createUserResources();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="border border-red-700 rounded p-1">
          <p className="text-xl">{this.state.error.message}</p>
          <button className="bg-orange-400 rounded-xl p-1 text-black cursor-pointer" onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}