import { injectable } from 'tsyringe';
import { BillOfSaleRepository } from '../repositories/billofsaleRepository';

@injectable()
export class BillOfSaleService {
  constructor(private billofsaleRepository: BillOfSaleRepository
  ) {}
  async getBillOfSaleByStatus(id: string): Promise<any> {
    return this.billofsaleRepository.getBillOfSaleByStatus(id);
  }
  async updateBillOfSale(donhangban: any): Promise<any> {
    return this.billofsaleRepository.updateBillOfSale(donhangban);
  }
  async getDetailBillOfSaleByid(id: string): Promise<any> {
    return this.billofsaleRepository.getDetailBillOfSaleByid(id);
  }
  async addorder(donhangban: any): Promise<any> {
    return this.billofsaleRepository.addorder(donhangban);
  }
  async addorderdetail(donhangban: any): Promise<any> {
    return this.billofsaleRepository.addorderdeatil(donhangban);
  }
}