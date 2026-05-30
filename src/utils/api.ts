import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
      }
    );
  }

  async sendMessage(message: string) {
    try {
      const response = await this.client.post('/chat', { message });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getHistory() {
    try {
      const response = await this.client.get('/history');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new APIClient();