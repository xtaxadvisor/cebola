import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { SupabaseProvider } from './contexts/SupabaseContext';
import { Notifications } from './components/ui/Notifications';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { SplashScreen } from './components/ui/SplashScreen';
// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnWindowFocus: false
        },
    },
});
function App() {
    return (_jsx(ErrorBoundary, { children: _jsx(BrowserRouter, { children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(SupabaseProvider, { children: _jsxs(AuthProvider, { children: [_jsx(Suspense, { fallback: _jsx(SplashScreen, {}), children: _jsx(AppRoutes, {}) }), _jsx(Notifications, {})] }) }) }) }) }));
}
export default App;
