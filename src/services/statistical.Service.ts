import { injectable } from 'tsyringe';
import { StatisticalRepository } from '../repositories/statistical.Repository';

@injectable()
export class StatisticalService {
  constructor(private statisticalRepository: StatisticalRepository
  ) {}
  async getPiceDetailbill(donhangban: any): Promise<any> {
    return this.statisticalRepository.getPiceDetailbill(donhangban);
  }
  async statisticalInMonth(donhangban: any): Promise<any> {
    return this.statisticalRepository.statisticalInMonth(donhangban);
  }
  async statisticalInYear(donhangban: any): Promise<any> {
    return this.statisticalRepository.statisticalInYear(donhangban);
  }
  async statisticalInDate(donhangban: any): Promise<any> {
    return this.statisticalRepository.statisticalInDate(donhangban);
  }
  async gatBillInDay(donhangban: any): Promise<any> {
    return this.statisticalRepository.gatBillInDay(donhangban);
  }
  async getBillInMonth(donhangban: any): Promise<any> {
    return this.statisticalRepository.getBillInMonth(donhangban);
  }
  async getBillInYear(donhangban: any): Promise<any> {
    return this.statisticalRepository.getBillInYear(donhangban);
  }
  async getBillInDate(donhangban: any): Promise<any> {
    return this.statisticalRepository.getBillInDate(donhangban);
  }
}