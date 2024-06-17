import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class NewsRepository {
  constructor(private db: Database) { }  
   async getNewsById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdTinTuc(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getNewsAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllTinTuc()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateNews(tintuc: any): Promise<any> {
    try {
      const sql = 'CALL `EditLoaisp`(?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [tintuc.MaTT, tintuc.TieuDe, tintuc.Anh, tintuc.NoiDung, tintuc.NgayDang, tintuc.MaNV]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createNews(tintuc: any): Promise<any> {
    try {
      const sql = 'CALL `CreateTinTuc`(?, ?, ?, ?, ?)';
      await this.db.query(sql, [tintuc.TieuDe, tintuc.Anh, tintuc.NoiDung, tintuc.NgayDang, tintuc.MaNV]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteNews(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteTinTuc(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}