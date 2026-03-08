import { HttpClient } from '@/config/http.client';
import type { IRequestConfig } from '@/interfaces/config/IRequest';
import type { IAPIService } from '@/interfaces/services/IAPIService';

export class APIService implements IAPIService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly baseUrl: string,
    ) {}

    async get<T>(resource: string, config?: IRequestConfig): Promise<T> {
        return this.httpClient.get(`${this.baseUrl}/${resource}`, config);
    }

    async post<T, K = unknown>(resource: string, data?: K, config?: IRequestConfig): Promise<T> {
        return this.httpClient.post(`${this.baseUrl}/${resource}`, data, config);
    }
}

const httpClient = new HttpClient();

export const apiService = new APIService(httpClient, import.meta.env.PUBLIC_API_URL);
