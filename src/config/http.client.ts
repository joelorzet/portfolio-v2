import { HttpError } from '@/common/errors/request/http';
import type { IRequestConfig } from '@/interfaces/config/IRequest';

export class HttpClient {
    async request<T>(url: string, config: IRequestConfig): Promise<T> {
        const response = await fetch(url, {
            method: config.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...config.headers,
            },
            body: config.data ? JSON.stringify(config.data) : undefined,
        });

        if (!response.ok) {
            throw new HttpError(`HTTP error! status: ${response.status}`, response.status);
        }

        return await response.json();
    }

    async get<T>(url: string, config?: IRequestConfig): Promise<T> {
        return this.request(url, { method: 'GET', ...config });
    }

    async post<T, K = unknown>(url: string, data?: K, config?: IRequestConfig): Promise<T> {
        return this.request(url, { method: 'POST', data, ...config });
    }
}
