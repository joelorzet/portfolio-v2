import { HttpClient, RequestConfig } from '@/config/http.client';

export class HttpService {
    constructor(private readonly httpClient: HttpClient) {}

    async get<T>(url: string, config?: RequestConfig): Promise<T> {
        return this.httpClient.get(url, config);
    }

    async post<T, K = unknown>(url: string, data?: K, config?: RequestConfig): Promise<T> {
        return this.httpClient.post(url, data, config);
    }
}

const httpClient = new HttpClient(import.meta.env.VITE_API_URL);

export const httpService = new HttpService(httpClient);
