import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class UserRepository {
  constructor(private db: Database) { }  
  async GetUserByAccount(username: string, password: string): Promise<any> {
    try {
      const sql = 'CALL GetUserByAccount(?,?)';
      const [results] = await this.db.query(sql, [username,password]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getuserAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllUser()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getcustomerAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllKhachHang()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getstaffAll(): Promise<any> {
    try {
      const sql = 'CALL GetAllNhanVien()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getcustomerId(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdKhachHang(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async register(user: any): Promise<any> {
    try {
      const sql = 'CALL `DangKi`(?, ?, ?)';
      await this.db.query(sql, [user.username, user.password, user.role]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async registercus(customer: any): Promise<any> {
    try {
      const sql = 'CALL `dangki_kh`(?, ?, ?, ?)';
      await this.db.query(sql, [customer.TenKH, customer.Email, customer.SDT, customer.DiaChi]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
}