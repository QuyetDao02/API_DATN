import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class SizeRepository {
  constructor(private db: Database) { }  
   async getSizeById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIDKichThuoc(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getsizeAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllKichThuoc()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updatesize(size: any): Promise<any> {
    try {
      const sql = 'CALL EditKichThuoc(?, ?, ?, ?, ?)';
      await this.db.query(sql, [size.idSize, size.dai, size.rong, size.cao, size.GhiChu]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createsize(size: any): Promise<any> {
    try {
      const sql = 'CALL CreateKichThuoc(?, ?, ?, ?, ?)';
      await this.db.query(sql, [size.dai, size.rong, size.cao, size.GhiChu, size.idDNT]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deletesize(id: any): Promise<any> {
    try {
        
      const sql = 'CALL DeleteKichThuoc(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}