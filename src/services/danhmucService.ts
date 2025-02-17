import { injectable } from 'tsyringe';
import { DanhMucRepository } from '../repositories/danhmucRepository';

@injectable()
export class DanhMucService {
  constructor(private danhMucRepository: DanhMucRepository
  ) {}
  async getDanhMucById(id: string): Promise<any> {
    return this.danhMucRepository.getDanhMucById(id);
  }
  async getDanhMucAll(): Promise<any> {
    return this.danhMucRepository.getDanhMucAll();
  }
  async updateDanhMuc(danhmuc: any): Promise<any> {
    return this.danhMucRepository.updateDanhMuc(danhmuc);
  }
  async createDanhMuc(danhmuc: any): Promise<any> {
    return this.danhMucRepository.createDanhMuc(danhmuc);
  }
  async deleteDanhMuc(danhmuc: any): Promise<any> {
    return this.danhMucRepository.deleteDanhMuc(danhmuc);
  }
}