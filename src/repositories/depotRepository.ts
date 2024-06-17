import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class DepotRepository {
  constructor(private db: Database) { }  
   async getDepotById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIDDepot(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getDepotAll(): Promise<any> {
    try {
      const sql = 'CALL Getallkho()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateDepot(depot: any): Promise<any> {
    try {
      const sql = 'CALL `Updatekho`(?, ?)';
      await this.db.query(sql, [depot.idKho, depot.idSanPham, depot.MaMau, depot.idhang, depot.idKichThuoc, depot.SoLuongTon]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }

  async updateQuantyDepot(depot: any): Promise<any> {
    try {
      const sql = 'CALL `EditQuantyKho`(?, ?)';
      await this.db.query(sql, [depot.MaKho, depot.SoLuong]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createDepot(depot: any): Promise<any> {
    try {
      const sql = 'CALL `CreateKho`(?, ?, ?, ?)';
      await this.db.query(sql, [depot.MaDNT, depot.idSize, depot.idMauSac, depot.SoLuong]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteDepot(id: any): Promise<any> {
    try {
      const sql = 'CALL Deletekho(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async getDepotByProduct(id: string): Promise<any> {
    try {
      const sql = 'CALL getkhobyidproduct(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getDepotByIdInColorSize(depot: any): Promise<any> {
    try {
      const sql = 'CALL GetIDDepotBySizeColor(?, ?)';
      const [results] = await this.db.query(sql, [depot.idSize, depot.idMauSac]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
}