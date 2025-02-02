interface CreateUserDTO {
    name: string;
    email: string;
    role: string;
}
interface UpdateUserDTO extends Partial<CreateUserDTO> {
    id: string;
}
export declare function useUsers(): {
    users: User[] | undefined;
    isLoading: boolean;
    createUser: import("@tanstack/react-query").UseMutateFunction<User, Error, CreateUserDTO, unknown>;
    updateUser: import("@tanstack/react-query").UseMutateFunction<User, Error, UpdateUserDTO, unknown>;
    deleteUser: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
    isCreating: any;
    isUpdating: any;
    isDeleting: any;
};
export {};
