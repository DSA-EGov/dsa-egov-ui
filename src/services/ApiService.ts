import axios, { RawAxiosRequestHeaders } from 'axios';

export class ApiService {
  private static readonly _baseUrl = import.meta.env.VITE_API_URL;

  private get _token(): string | null {
    return localStorage.getItem('access_token');
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
      method: 'GET',
    });

    return req.data;
  }

  public async delete<T>(url: string, query?: object): Promise<T> {
    const req = await axios.get<T>(url, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
      method: 'DELETE',
    });

    return req.data;
  }

  public async patch<T>(url: string, body?: any, query?: object): Promise<T> {
    const req = await axios.get<T>(url, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
      data: body,
      method: 'PATCH',
    });

    return req.data;
  }

  public async post<T>(url: string, body: any, query?: object): Promise<T> {
    const req = await axios.post(url, body, {
      baseURL: ApiService._baseUrl,
      params: query,
      headers: this._headers,
      method: 'POST',
    });

    return req.data;
  }
}
