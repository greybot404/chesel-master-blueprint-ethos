
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen blueprint-flex-center bg-white">
      <div className="blueprint-module text-center max-w-md">
        <div className="blueprint-card-standard text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-black rounded-full blueprint-flex-center">
            <span className="blueprint-h1 text-white">404</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="blueprint-h2">Page Not Found</h1>
            <p className="blueprint-body text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <a 
            href="/" 
            className="blueprint-btn-primary w-full blueprint-flex-center gap-3 blueprint-hover-scale"
          >
            <Home className="w-5 h-5" />
            <span>Return to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
