import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class ImportedInvoiceRepository {
  constructor(private db: Database) { }  
   async getImportedInvoiceByStatus(id: string): Promise<any> {
    try {
      const sql = 'CALL GetAllHDN_TinhTrang(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

  async updateImportedInvoice(hoadonnhap: any): Promise<any> {
    try {
      const sql = 'CALL `EditHDN`(?, ?, ?)';
      await this.db.query(sql, [hoadonnhap.id, hoadonnhap.TinhTrang, hoadonnhap.TrangThai]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }

  async updateImportedInvoicePice(hoadonnhap: any): Promise<any> {
    try {
      const sql = 'CALL `EditPiceHDN`(?, ?)';
      await this.db.query(sql, [hoadonnhap.id, hoadonnhap.TongTien]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createImportedInvoice(hoadonnhap: any): Promise<any> {
    try {
      const sql = 'CALL `CreateHDN`(?, ?, ?, ?, ?)';
      await this.db.query(sql, [hoadonnhap.MaNV, hoadonnhap.TinhTrang, hoadonnhap.NgayNhap, hoadonnhap.TongTien, hoadonnhap.MaNCC]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteImportedInvoice(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteHDN(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async getImportedInvoiceById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetAllCTHDNByID(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async createDetailImportedInvoice(chitiethdn: any): Promise<any> {
    try {
      const sql = 'CALL `CreateCTHDN`(?, ?, ?, ?)';
      await this.db.query(sql, [chitiethdn.idHDN, chitiethdn.IDKho, chitiethdn.SoLuong, chitiethdn.Gia]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteDetailImportedInvoice(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteCTHDN(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async getImportedInvoiceByID(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdHDN(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
}