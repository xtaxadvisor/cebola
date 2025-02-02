import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useSupabaseStatus } from '../../hooks/useSupabaseStatus';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function ProtectedRoute({ children, requiredRole }) {
    const { user, loading, isAuthenticated } = useAuth();
    const { isConnected, isConfigValid } = useSupabaseStatus();
    const location = useLocation();
    if (loading) {
        return _jsx(LoadingSpinner, {});
    }
    if (!isConfigValid || !isConnected) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Connection Error" }), _jsx("p", { className: "mt-2 text-gray-600", children: "Unable to connect to the database. Please try again later." })] }) }));
    }
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    if (requiredRole && user && !requiredRole.includes(user.role)) {
        return _jsx(Navigate, { to: "/unauthorized", replace: true });
    }
    return _jsx(_Fragment, { children: children });
}
