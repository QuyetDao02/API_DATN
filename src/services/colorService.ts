import { injectable } from 'tsyringe';
import { ColorRepository } from '../repositories/colorRepository';

@injectable()
export class ColorService {
  constructor(private colorRepository: ColorRepository
  ) {}
  async getcolorById(id: string): Promise<any> {
    return this.colorRepository.getcolorById(id);
  }
  async getcolorAll(): Promise<any> {
    return this.colorRepository.getcolorAll();
  }
  async updatecolor(color: any): Promise<any> {
    return this.colorRepository.updatecolor(color);
  }
  async createcolor(color: any): Promise<any> {
    return this.colorRepository.createcolor(color);
  }
  async deletecolor(id: any): Promise<any> {
    return this.colorRepository.deletecolor(id);
  }
  async getcolorByProduct(id: string): Promise<any> {
    return this.colorRepository.getcolorByProduct(id);
  }
  async createdetailcolor(color: any): Promise<any> {
    return this.colorRepository.createdetailcolor(color);
  }
}