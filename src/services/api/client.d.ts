import { AxiosRequestConfig } from 'axios';
export declare class APIClient {
    private static instance;
    private client;
    private constructor();
    private setupInterceptors;
    static getInstance(): APIClient;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
export declare const apiClient: APIClient;
