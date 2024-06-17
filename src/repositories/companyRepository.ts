import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class companyRepository {
  constructor(private db: Database) { }  
   async gethangById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdHang(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async gethangAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllHang()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updatehang(hang: any): Promise<any> {
    try {
      const sql = 'CALL `EditHang`(?, ?, ?, ?, ?)';
      await this.db.query(sql, [hang.idhang,hang.tenhang,hang.diachi,hang.sdt,hang.ghichu]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createhang(hang: any): Promise<any> {
    try {
      const sql = 'CALL `CreateHang`(?, ?, ?, ?)';
      await this.db.query(sql, [hang.tenhang,hang.diachi,hang.sdt,hang.ghichu]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deletehang(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteHang(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}