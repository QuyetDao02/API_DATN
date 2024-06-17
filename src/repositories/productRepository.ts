import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class ProductRepository {
  constructor(private db: Database) { }  
  async productNew(): Promise<any> {
    try {
      const sql = 'CALL sanphammoi()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getallproduct(): Promise<any> {
    try {
      const sql = 'CALL GetAllSanPham()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async getallproductimage(): Promise<any> {
    try {
      const sql = 'CALL GetAllHinhAnh()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getallproductprice(): Promise<any> {
    try {
      const sql = 'CALL GetAllGia()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async sellingProduct(): Promise<any> {
    try {
      const sql = 'CALL sanphamhot()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async representativeProduct(): Promise<any> {
    try {
      const sql = 'CALL sanphamtieubieu()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getProductId(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdSanPham(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getProductIdADMIN(id: string): Promise<any> {
    try {
      const sql = 'CALL GetByIdSanPhamAdmin(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getProductCategoryId(id: string): Promise<any> {
    try {
      const sql = 'CALL GetSanPhamByCategoryID(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async updateproduct(product: any): Promise<any> {
    try {
      const sql = 'CALL `EditSanPham`(?, ?, ?, ?, ?, ?, ?)';
      await this.db.query(sql, [product.id, product.TenDNT, product.MaLDNT,
                                product.HinhAnh, product.MoTa, product.GiaTB, product.idhang]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  
  async createproduct(product: any): Promise<any> {
    try {
      const sql = 'CALL `CreateSanPham`(?, ?, ?, ?, ?)';
      await this.db.query(sql, [product.TenDNT, product.MaLDNT, product.idhang,
                                product.HinhAnh, product.MoTa]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async deleteproduct(id: any): Promise<any> {
    try {
      const sql = 'CALL DeleteSanPham(?)';
      await this.db.query(sql, [id]);
      return true;
    } catch (error: any) {
      throw new Error( error.message);
    }
  }
  async getallproductAdmin(): Promise<any> {
    try {
      const sql = 'CALL GetAllSanPhamAdmin()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
  async getProductImageOfColor(product: any): Promise<any> {
    try {
      const sql = 'CALL GetChiTietAnhByIDProductIDCtmau(?, ?)';
      const [results] = await this.db.query(sql, [product.id, product.idms]);      
      if (Array.isArray(results) && results.length > 0) {
        return results;
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
}