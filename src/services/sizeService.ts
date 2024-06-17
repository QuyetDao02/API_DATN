import { injectable } from 'tsyringe';
import { SizeRepository } from '../repositories/sizeRepository';

@injectable()
export class SizeService {
  constructor(private sizeRepository: SizeRepository
  ) {}
  async getsizeById(id: string): Promise<any> {
    return this.sizeRepository.getSizeById(id);
  }
  async getsizeAll(): Promise<any> {
    return this.sizeRepository.getsizeAll();
  }
  async updatesize(size: any): Promise<any> {
    return this.sizeRepository.updatesize(size);
  }
  async createsize(size: any): Promise<any> {
    return this.sizeRepository.createsize(size);
  }
  async deletesize(id: any): Promise<any> {
    return this.sizeRepository.deletesize(id);
  }
}