import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class supplierRepository {
  constructor(private db: Database) { }  
   async getnccId(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdNCC(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getnccAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllNCC()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateNCC(ncc: any): Promise<any> {
    try {
      const sql = 'CALL `EditNCC`(?, ?, ?, ?)';
      await this.db.query(sql, [ncc.MaNCC, ncc.TenNCC, ncc.DiaChi, ncc.Sdt]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createncc(ncc: any): Promise<any> {
    try {
      const sql = 'CALL `CreateNCC`(?, ?, ?)';
      await this.db.query(sql, [ncc.TenNCC, ncc.DiaChi, ncc.Sdt]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deletencc(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteNCC(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}