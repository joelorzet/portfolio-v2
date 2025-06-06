import { HttpClient, RequestConfig } from '@/config/http.client';

export class HttpService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly baseUrl: string,
    ) {}

    async get<T>(resource: string, config?: RequestConfig): Promise<T> {
        return this.httpClient.get(`${this.baseUrl}/${resource}`, config);
    }

    async post<T, K = unknown>(resource: string, data?: K, config?: RequestConfig): Promise<T> {
        return this.httpClient.post(`${this.baseUrl}/${resource}`, data, config);
    }
}

const httpClient = new HttpClient();

export const httpService = new HttpService(httpClient, import.meta.env.VITE_API_URL);
