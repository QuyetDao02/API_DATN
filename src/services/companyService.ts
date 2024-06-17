import { injectable } from 'tsyringe';
import { companyRepository } from '../repositories/companyRepository';

@injectable()
export class companyService {
  constructor(private CompanyRepository: companyRepository
  ) {}
  async gethangById(id: string): Promise<any> {
    return this.CompanyRepository.gethangById(id);
  }
  async gethangAll(): Promise<any> {
    return this.CompanyRepository.gethangAll();
  }
  async updatehang(hang: any): Promise<any> {
    return this.CompanyRepository.updatehang(hang);
  }
  async createhang(hang: any): Promise<any> {
    return this.CompanyRepository.createhang(hang);
  }
  async deletehang(id: any): Promise<any> {
    return this.CompanyRepository.deletehang(id);
  }
}