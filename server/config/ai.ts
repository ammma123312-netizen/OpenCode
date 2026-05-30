import axios, { AxiosInstance } from 'axios';

export interface AIConfig {
  apiKey: string;
  apiUrl: string;
  model: string;
  timeout: number;
}

class AIService {
  private client: AxiosInstance;
  private config: AIConfig;

  constructor() {
    this.config = {
      apiKey: process.env.MINIMAX_API_KEY || '',
      apiUrl: process.env.MINIMAX_API_URL || 'https://api.minimax.chat/v1',
      model: 'minimax-text-01',
      timeout: 30000,
    };

    this.client = axios.create({
      baseURL: this.config.apiUrl,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const response = await this.client.post('/text/completions', {
        model: this.config.model,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        top_p: 0.9,
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error('Failed to generate AI response');
    }
  }

  async validateConnection(): Promise<boolean> {
    try {
      const response = await this.client.get('/models');
      return response.status === 200;
    } catch (error) {
      console.error('AI Connection Error:', error);
      return false;
    }
  }
}

export default new AIService();