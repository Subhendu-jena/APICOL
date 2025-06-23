import React from "react";
import { AlertTriangle } from "lucide-react"; // Optional: install lucide-react

interface ErrorBoundaryProps {
  children: any;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  showDetails: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, showDetails: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    // You can log the error to an error tracking service here
  }

  toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }));
  };

  render() {
    const { hasError, error, showDetails } = this.state;

    if (hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center border border-red-100">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="text-red-500 w-12 h-12" />
            </div>
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              Oops! Something went wrong.
            </h1>
            <p className="text-gray-600 mb-4">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Reload Page
              </button>
              {error && (
                <button
                  onClick={this.toggleDetails}
                  className="text-sm text-gray-500 underline"
                >
                  {showDetails ? "Hide error details" : "Show error details"}
                </button>
              )}
            </div>
            {showDetails && error && (
              <div className="mt-4 text-left text-sm text-red-700 bg-red-50 p-3 rounded overflow-auto max-h-40">
                <pre>{error.toString()}</pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
