import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class DanhMucRepository {
  constructor(private db: Database) { }  
   async getDanhMucById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetDanhMucById(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getDanhMucAll(): Promise<any> {
    try {
      const sql = 'CALL GetDanhMucAll()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateDanhMuc(danhmuc: any): Promise<any> {
    try {
      const sql = 'CALL `UpdateDanhMuc`(?, ?)';
      await this.db.query(sql, [danhmuc.danh_muc_id, danhmuc.ten_danh_muc]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createDanhMuc(danhmuc: any): Promise<any> {
    try {
      const sql = 'CALL `CreateDanhMuc`(?, ?)';
      await this.db.query(sql, [danhmuc.ten_danh_muc, danhmuc.ghichu]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteDanhMuc(danhmuc: any): Promise<any> {
    try {
      const sql = 'CALL DeleteDanhMuc(?)';
      await this.db.query(sql, [danhmuc.danh_muc_id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}