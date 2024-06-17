import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { BillOfSaleService } from '../services/billofsaleService';

@injectable()
export class BillOfSaleController {
  constructor(private billofsaleService: BillOfSaleService 
  ) { } 
  
  async getBillOfSaleStatus(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const donhangban = await this.billofsaleService.getBillOfSaleByStatus(id);   
      if (donhangban) {
        res.json(donhangban);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  


  async updateBillOfSale(req: Request, res: Response): Promise<void> {
    try {
      const donhangban = req.body as {id:any, TinhTrang:any, TrangThai:any};
      const results = await this.billofsaleService.updateBillOfSale(donhangban);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }

  async getDetailBillOfSaleByid(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const donhangban = await this.billofsaleService.getDetailBillOfSaleByid(id);   
      if (donhangban) {
        res.json(donhangban);
      } else {
        res.json({ message: 'Dữ liệu không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async addorder(req: Request, res: Response): Promise<void> {
    try {
      const donhangban = req.body as {MaKH:any, NgayLap:any, DiaChi:any, TinhTrang:any, TongTien:any, GhiChu:any, NguoiNhan:any, SdtNguoiNhan:any, TrangThai:any};
      const results = await this.billofsaleService.addorder(donhangban);
      res.json({ message: 'Đã thêm thành công',results:true });
      console.log(donhangban);
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }  
  async addoderdetail(req: Request, res: Response): Promise<void> {
    try {
      const ctdonhangban = req.body as {idKho:any, Gia:any, SoLuong:any};
      const results = await this.billofsaleService.addorderdetail(ctdonhangban);
      res.json({ message: 'Đã thêm thành công',results:true });
      console.log(ctdonhangban)
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}