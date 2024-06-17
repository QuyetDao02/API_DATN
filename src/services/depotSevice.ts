import { injectable } from 'tsyringe';
import { DepotRepository } from '../repositories/depotRepository';

@injectable()
export class DepotService {
  constructor(private depotRepository: DepotRepository
  ) {}
  async getDepotById(id: string): Promise<any> {
    return this.depotRepository.getDepotById(id);
  }
  async getDepotAll(): Promise<any> {
    return this.depotRepository.getDepotAll();
  }
  async updateDepot(Depot: any): Promise<any> {
    return this.depotRepository.updateDepot(Depot);
  }
  async updateQuantyDepot(Depot: any): Promise<any> {
    return this.depotRepository.updateQuantyDepot(Depot);
  }
  async createDepot(Depot: any): Promise<any> {
    return this.depotRepository.createDepot(Depot);
  }
  async deleteDepot(id: any): Promise<any> {
    return this.depotRepository.deleteDepot(id);
  }
  async getDepotByProduct(id: string): Promise<any> {
    return this.depotRepository.getDepotByProduct(id);
  }
  async getDepotByIdInColorSize(depot: any): Promise<any> {
    return this.depotRepository.getDepotByIdInColorSize(depot);
  }
}