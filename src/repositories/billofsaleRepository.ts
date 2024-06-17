import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class BillOfSaleRepository {
  constructor(private db: Database) { }  
  async getBillOfSaleByStatus(id: string): Promise<any> {
    try {
      const sql = 'CALL GetAllDHB_TinhTrang(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

  async updateBillOfSale(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL `EditDHB`(?, ?, ?)';
      await this.db.query(sql, [donhangban.id, donhangban.TinhTrang, donhangban.TrangThai]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async getDetailBillOfSaleByid(id: string): Promise<any> {
    try {
      const sql = 'CALL GetAllCTDHByID(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async addorder(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL `ADDOrder`(?, ?, ?, ?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [donhangban.MaKH, donhangban.NgayLap, donhangban.DiaChi, donhangban.TinhTrang, donhangban.TongTien, donhangban.GhiChu, donhangban.NguoiNhan, donhangban.SdtNguoiNhan, donhangban.TrangThai]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async addorderdeatil(ctdonhangban: any): Promise<any> {
    try {
      const sql = 'CALL `ADDOrderDetail`(?, ?, ?)';
      await this.db.query(sql, [ctdonhangban.idKho, ctdonhangban.Gia, ctdonhangban.SoLuong]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}