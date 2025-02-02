interface TaskFormProps {
    onSubmit: (data: {
        title: string;
        description: string;
        dueDate: string;
        priority: 'high' | 'medium' | 'low';
        assignedTo?: string;
    }) => void;
    onCancel: () => void;
}
export declare function TaskForm({ onSubmit, onCancel }: TaskFormProps): import("react/jsx-runtime").JSX.Element;
export {};
