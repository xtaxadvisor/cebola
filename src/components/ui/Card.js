import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ icon: Icon, title, value, description, className = '' }) {
    return (_jsx("div", { className: `bg-white overflow-hidden shadow rounded-lg ${className}`, children: _jsx("div", { className: "p-5", children: _jsxs("div", { className: "flex items-center", children: [Icon && (_jsx("div", { className: "flex-shrink-0", children: _jsx(Icon, { className: "h-6 w-6 text-blue-600" }) })), _jsx("div", { className: `${Icon ? 'ml-5' : ''} w-0 flex-1`, children: _jsxs("dl", { children: [_jsx("dt", { className: "text-sm font-medium text-gray-500 truncate", children: title }), _jsx("dd", { className: "text-lg font-medium text-gray-900", children: value }), description && (_jsx("dd", { className: "text-sm text-gray-500 mt-1", children: description }))] }) })] }) }) }));
}
