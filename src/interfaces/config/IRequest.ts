export interface IRequestConfig {
  url?: string;
  method: string;
  data?: unknown;
  headers?: Record<string, string>;
}