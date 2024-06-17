import { injectable } from 'tsyringe';
import { ImportedInvoiceRepository } from '../repositories/importedinvoiceRepository';

@injectable()
export class ImportedInvoiceService {
  constructor(private importedinvoiceRepository: ImportedInvoiceRepository
  ) {}
  async getImportedInvoiceById(id: string): Promise<any> {
    return this.importedinvoiceRepository.getImportedInvoiceById(id);
  }
  async getImportedInvoiceByStatus(id: string): Promise<any> {
    return this.importedinvoiceRepository.getImportedInvoiceByStatus(id);
  }
  async updateImportedInvoice(hoadonnhap: any): Promise<any> {
    return this.importedinvoiceRepository.updateImportedInvoice(hoadonnhap);
  }
  async updateImportedInvoicePice(hoadonnhap: any): Promise<any> {
    return this.importedinvoiceRepository.updateImportedInvoicePice(hoadonnhap);
  }
  async createImportedInvoice(hoadonnhap: any): Promise<any> {
    return this.importedinvoiceRepository.createImportedInvoice(hoadonnhap);
  }
  async deleteImportedInvoice(id: any): Promise<any> {
    return this.importedinvoiceRepository.deleteImportedInvoice(id);
  }
    async createDetailImportedInvoice(chitiethdn: any): Promise<any> {
    return this.importedinvoiceRepository.createDetailImportedInvoice(chitiethdn);
  }
  async deleteDetailImportedInvoice(id: any): Promise<any> {
    return this.importedinvoiceRepository.deleteDetailImportedInvoice(id);
  }
  async getImportedInvoiceByID(id: string): Promise<any> {
    return this.importedinvoiceRepository.getImportedInvoiceByID(id);
  }
}