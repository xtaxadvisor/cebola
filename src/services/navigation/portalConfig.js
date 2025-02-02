import { Shield, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';
export const PORTAL_CONFIGS = {
    admin: {
        id: 'admin',
        title: 'Admin Portal',
        description: 'Comprehensive system administration and management.',
        icon: Shield,
        path: '/admin',
        requiredRole: ['admin'],
        features: [
            'User Management',
            'System Settings',
            'Analytics Dashboard',
            'Security Controls'
        ],
        notifications: true,
        messaging: true,
        documents: true
    },
    student: {
        id: 'student',
        title: 'Student Portal',
        description: 'Access educational resources and financial learning materials.',
        icon: BookOpen,
        path: '/student',
        requiredRole: ['student'],
        features: [
            'Financial Education',
            'Learning Resources',
            'Practice Exercises',
            'Progress Tracking'
        ],
        notifications: true,
        messaging: true,
        documents: true
    },
    investor: {
        id: 'investor',
        title: 'Investor Portal',
        description: 'Access investment tools and market insights.',
        icon: TrendingUp,
        path: '/investor',
        requiredRole: ['investor'],
        features: [
            'Portfolio Management',
            'Market Analysis',
            'Investment Tools',
            'Performance Tracking'
        ],
        notifications: true,
        messaging: true,
        documents: true
    },
    messages: {
        id: 'messages',
        title: 'Secure Messaging',
        description: 'End-to-end encrypted communication platform.',
        icon: MessageSquare,
        path: '/messages',
        features: [
            'End-to-End Encryption',
            'File Sharing',
            'Message History',
            'Real-time Chat'
        ],
        notifications: true
    }
};
export function getPortalConfig(portalId) {
    return PORTAL_CONFIGS[portalId];
}
export function getAvailablePortals(userRole) {
    return Object.values(PORTAL_CONFIGS).filter(config => !config.requiredRole || (userRole && config.requiredRole.includes(userRole)));
}
