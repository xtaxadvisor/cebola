import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DollarSign, TrendingUp, CreditCard, AlertCircle } from 'lucide-react';
import { Card } from '../../ui/Card';
import { BarChart } from '../charts/BarChart';
import { formatCurrency } from '../../../utils/format';
import { useAnalytics } from '../../../hooks/useAnalytics';
export function RevenueAnalytics() {
    const { metrics, isLoading } = useAnalytics('month');
    const stats = [
        {
            title: 'Total Revenue',
            value: formatCurrency(metrics?.totalRevenue || 0),
            change: '+15%',
            icon: DollarSign
        },
        {
            title: 'Average Transaction',
            value: formatCurrency(metrics?.avgTransaction || 0),
            change: '+3%',
            icon: CreditCard
        },
        {
            title: 'Growth Rate',
            value: `${metrics?.growthRate || 0}%`,
            change: '+5%',
            icon: TrendingUp
        },
        {
            title: 'Pending Transactions',
            value: metrics?.pendingTransactions || 0,
            change: '-8%',
            icon: AlertCircle
        }
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((stat) => (_jsx(Card, { title: stat.title, value: stat.value, description: stat.change, icon: stat.icon }, stat.title))) }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Monthly Revenue" }), _jsx(BarChart, {})] })] }));
}
