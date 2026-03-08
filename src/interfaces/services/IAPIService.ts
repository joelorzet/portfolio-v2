export interface IAPIService {
    get<T>(url: string): Promise<T>;
    post<T, K = unknown>(url: string, data?: K): Promise<T>;
}
