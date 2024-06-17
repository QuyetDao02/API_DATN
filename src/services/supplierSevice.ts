import { injectable } from 'tsyringe';
import { supplierRepository } from '../repositories/supplierRepository';

@injectable()
export class supplierService {
  constructor(private SupplierRepository: supplierRepository
  ) {}
  async getnccById(id: string): Promise<any> {
    return this.SupplierRepository.getnccId(id);
  }
  async getnccAll(): Promise<any> {
    return this.SupplierRepository.getnccAll();
  }
  async updatencc(ncc: any): Promise<any> {
    return this.SupplierRepository.updateNCC(ncc);
  }
  async createncc(ncc: any): Promise<any> {
    return this.SupplierRepository.createncc(ncc);
  }
  async deletencc(id: any): Promise<any> {
    return this.SupplierRepository.deletencc(id);
  }
}