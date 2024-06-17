import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class StatisticalRepository {
  constructor(private db: Database) { }


  async getPiceDetailbill(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL ThongKeTheoNgay(?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.NgayLap]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async statisticalInMonth(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL ThongKeTheoThang(?, ?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.Thang, donhangban.Nam]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async statisticalInYear(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL ThongKeTheoNam(?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.Nam]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async statisticalInDate(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL ThongKeTrongKhoangThoiGian(?, ?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.BatDau, donhangban.KetThuc]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async gatBillInDay(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL GetDHBTheoNgay(?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.NgayLap]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getBillInMonth(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL GetDHBTheoThang(?, ?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.Thang, donhangban.Nam]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getBillInYear(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL GetDHBTheoNam(?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.Nam]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getBillInDate(donhangban: any): Promise<any> {
    try {
      const sql = 'CALL GetDHBTheoKhoangThoiGian(?, ?, ?)';
      const [results] = await this.db.query(sql, [donhangban.TinhTrang, donhangban.BatDau, donhangban.KetThuc]);
      if (Array.isArray(results) && results.length > 0) {
        return results;
      }
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}