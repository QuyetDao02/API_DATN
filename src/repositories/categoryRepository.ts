import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class categoryRepository {
  constructor(private db: Database) { }  
   async getCategoryById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIDLoaiSP(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getCategoryAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllLoaiSP()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateCategory(loaisanpham: any): Promise<any> {
    try {
      const sql = 'CALL `EditLoaisp`(?, ?, ?)';
      await this.db.query(sql, [loaisanpham.id, loaisanpham.TenLDNT, loaisanpham.MoTa]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createCategory(loaisanpham: any): Promise<any> {
    try {
      const sql = 'CALL `CreateLoaiSP`(?, ?)';
      await this.db.query(sql, [loaisanpham.TenLDNT, loaisanpham.MoTa]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteCategory(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteLoaisp(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}