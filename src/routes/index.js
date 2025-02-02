import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { UnauthorizedPage } from '../components/shared/UnauthorizedPage';
import { NotFoundPage } from '../components/shared/NotFoundPage';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';
// Eagerly load critical components
import Home from '../pages/Home';
// Lazy load other components
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const ConsultationPage = React.lazy(() => import('../pages/consultation/ConsultationPage'));
const ServiceCatalog = React.lazy(() => import('../pages/services/ServiceCatalog'));
const SameDayServices = React.lazy(() => import('../pages/services/SameDayServices'));
const VideoLibrary = React.lazy(() => import('../pages/videos/VideoLibrary'));
const VideoDetail = React.lazy(() => import('../pages/videos/VideoDetail'));
const AdminPortal = React.lazy(() => import('../pages/admin/AdminPortal'));
const InvestorPortal = React.lazy(() => import('../pages/investor/InvestorPortal'));
const StudentPortal = React.lazy(() => import('../pages/student/StudentPortal'));
const ProfessionalPortal = React.lazy(() => import('../pages/ProfessionalPortal'));
const LazyRoute = ({ children }) => (_jsx(ErrorBoundary, { children: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: children }) }));
export function AppRoutes() {
    const { isAuthenticated, user } = useAuth();
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/services", element: _jsx(LazyRoute, { children: _jsx(ServiceCatalog, {}) }) }), _jsx(Route, { path: "/same-day-services", element: _jsx(LazyRoute, { children: _jsx(SameDayServices, {}) }) }), _jsx(Route, { path: "/browse-videos", element: _jsx(LazyRoute, { children: _jsx(VideoLibrary, {}) }) }), _jsx(Route, { path: "/browse-videos/:videoId", element: _jsx(LazyRoute, { children: _jsx(VideoDetail, {}) }) }), _jsx(Route, { path: "/login", element: _jsx(LazyRoute, { children: isAuthenticated ? _jsx(Navigate, { to: "/" }) : _jsx(LoginPage, {}) }) }), _jsx(Route, { path: "/register", element: _jsx(LazyRoute, { children: isAuthenticated ? _jsx(Navigate, { to: "/" }) : _jsx(RegisterPage, {}) }) }), _jsx(Route, { path: "/consultation/*", element: _jsx(ProtectedRoute, { children: _jsx(LazyRoute, { children: _jsx(ConsultationPage, {}) }) }) }), _jsx(Route, { path: "/admin/*", element: _jsx(ProtectedRoute, { requiredRole: ['admin'], children: _jsx(LazyRoute, { children: _jsx(AdminPortal, {}) }) }) }), _jsx(Route, { path: "/investor/*", element: _jsx(ProtectedRoute, { requiredRole: ['investor'], children: _jsx(LazyRoute, { children: _jsx(InvestorPortal, {}) }) }) }), _jsx(Route, { path: "/student/*", element: _jsx(ProtectedRoute, { requiredRole: ['student'], children: _jsx(LazyRoute, { children: _jsx(StudentPortal, {}) }) }) }), _jsx(Route, { path: "/professional/*", element: _jsx(ProtectedRoute, { requiredRole: ['professional'], children: _jsx(LazyRoute, { children: _jsx(ProfessionalPortal, {}) }) }) }), _jsx(Route, { path: "/unauthorized", element: _jsx(UnauthorizedPage, {}) }), _jsx(Route, { path: "/not-found", element: _jsx(NotFoundPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/not-found", replace: true }) })] }));
}
