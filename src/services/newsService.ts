import { injectable } from 'tsyringe';
import { NewsRepository } from '../repositories/newsRepository';

@injectable()
export class NewsService {
  constructor(private newsRepository: NewsRepository
  ) {}
  async getNewsById(id: string): Promise<any> {
    return this.newsRepository.getNewsById(id);
  }
  async getNewsAll(): Promise<any> {
    return this.newsRepository.getNewsAll();
  }
  async updateNews(tintuc: any): Promise<any> {
    return this.newsRepository.updateNews(tintuc);
  }
  async createNews(tintuc: any): Promise<any> {
    return this.newsRepository.createNews(tintuc);
  }
  async deleteNews(id: any): Promise<any> {
    return this.newsRepository.deleteNews(id);
  }
}