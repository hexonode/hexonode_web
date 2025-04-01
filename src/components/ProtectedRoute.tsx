import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to the auth page but save the current path to redirect back after login
        return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute; 