import { injectable } from 'tsyringe';
import { categoryRepository } from '../repositories/categoryRepository';

@injectable()
export class categoryService {
  constructor(private categoryRepository: categoryRepository
  ) {}
  async getCategoryById(id: string): Promise<any> {
    return this.categoryRepository.getCategoryById(id);
  }
  async getCategoryAll(): Promise<any> {
    return this.categoryRepository.getCategoryAll();
  }
  async updateCategory(loaisanpham: any): Promise<any> {
    return this.categoryRepository.updateCategory(loaisanpham);
  }
  async createCategory(loaisanpham: any): Promise<any> {
    return this.categoryRepository.createCategory(loaisanpham);
  }
  async deleteCategory(id: any): Promise<any> {
    return this.categoryRepository.deleteCategory(id);
  }
}