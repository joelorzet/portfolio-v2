export type RequestConfig = {
    url?: string;
    method?: string;
    data?: unknown;
    headers?: Record<string, string>;
};

export class HttpClient {
    private readonly baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async request<T>(config: RequestConfig): Promise<T> {
        const url = config.url?.startsWith('http') ? config.url : `${this.baseURL}${config.url || ''}`;

        const response = await fetch(url, {
            method: config.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...config.headers,
            },
            body: config.data ? JSON.stringify(config.data) : undefined,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    async get<T>(url: string, config?: RequestConfig): Promise<T> {
        return this.request({ url, ...config });
    }

    async post<T, K = unknown>(url: string, data?: K, config?: RequestConfig): Promise<T> {
        return this.request({ url, method: 'POST', data, ...config });
    }
}
