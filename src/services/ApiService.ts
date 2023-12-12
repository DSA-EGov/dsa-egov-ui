import axios, { RawAxiosRequestHeaders } from 'axios';

export class ApiService {
  public static readonly routes = {
    SESSIONS_GET: import.meta.env.VITE_API_URL + '/sessions',
    SESSIONS_POST: import.meta.env.VITE_API_URL + '/sessions',
    SESSIONS_PATCH: import.meta.env.VITE_API_URL + '/sessions/:id',
    SESSIONS_DELETE: import.meta.env.VITE_API_URL + '/sessions/:id',

    CHAT_GET: import.meta.env.VITE_API_URL + '/chat/get/:sessionId',
    CHAT_POST: import.meta.env.VITE_API_URL + '/chat',
  } as const;

  private static readonly _baseUrl: string = import.meta.env.VITE_API_URL;
  private readonly _token: string;

  constructor(token: string) {
    this._token = token;
  }

  private get _headers(): Partial<RawAxiosRequestHeaders> {
    const headers: Partial<RawAxiosRequestHeaders> = {
      'Content-Type': 'application/json',
    };

    if (this._token) {
      headers.Authorization = `Bearer ${this._token}`;
    }

    return headers;
  }

  public async get<T>(url: string, query?: object): Promise<T> {
    const req = await axios.get<T>(url, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
    });

    return req.data;
  }

  public async delete<T>(url: string, query?: object): Promise<T> {
    const req = await axios.delete<T>(url, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
    });

    return req.data;
  }

  public async patch<T>(url: string, body?: any, query?: object): Promise<T> {
    const req = await axios.patch<T>(url, body, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
    });

    return req.data;
  }

  public async post<T, V = any>(
    url: string,
    body: V,
    query?: object,
  ): Promise<T> {
    const req = await axios.post(url, body, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
    });

    return req.data;
  }
}
