import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class ColorRepository {
  constructor(private db: Database) { }  
   async getcolorById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetMauSacByID(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getcolorAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllMauSac()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updatecolor(color: any): Promise<any> {
    try {
      const sql = 'CALL `EditMauSac`(?, ?, ?, ?)';
      await this.db.query(sql, [color.IDMauSac, color.MauSac, color.GhiChu, color.code]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createcolor(color: any): Promise<any> {
    try {
      const sql = 'CALL `CreateMauSac`(?, ?, ?)';
      await this.db.query(sql, [color.MauSac, color.GhiChu, color.code]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deletecolor(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteMauSac(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async getcolorByProduct(id: string): Promise<any> {
    try {
      const sql = 'CALL GetCTMauSacByProduct(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async createdetailcolor(color: any): Promise<any> {
    try {
      const sql = 'CALL `CreateCTMauSac`(?, ?)';
      await this.db.query(sql, [color.idms, color.iddnt]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}