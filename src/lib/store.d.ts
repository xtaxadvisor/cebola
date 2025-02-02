interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'in-progress' | 'completed';
    assignedTo?: string;
}
interface TaskState {
    tasks: Task[];
    addTask: (task: Omit<Task, 'id'>) => void;
    updateTask: (id: string, updates: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    moveTask: (id: string, newStatus: Task['status']) => void;
}
interface NotificationState {
    notifications: Array<{
        id: string;
        message: string;
        type: 'success' | 'error' | 'info';
    }>;
    addNotification: (message: string, type: 'success' | 'error' | 'info') => void;
    removeNotification: (id: string) => void;
}
export declare const useTaskStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TaskState>>;
export declare const useNotificationStore: import("zustand").UseBoundStore<import("zustand").StoreApi<NotificationState>>;
export {};
