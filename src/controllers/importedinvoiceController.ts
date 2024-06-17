import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { ImportedInvoiceService } from '../services/importedinvoiceService';

@injectable()
export class ImportedInvoiceController {
  constructor(private importedinvoiceService: ImportedInvoiceService 
  ) { } 
  
  async getImportedInvoiceId(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.importedinvoiceService.getImportedInvoiceById(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getImportedInvoiceStatus(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.importedinvoiceService.getImportedInvoiceByStatus(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  

  async updateImportedInvoice(req: Request, res: Response): Promise<void> {
    try {
      const hoadonnhap = req.body as {id:any, TinhTrang:any, TrangThai:any};
      const results = await this.importedinvoiceService.updateImportedInvoice(hoadonnhap);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async updateImportedInvoicePice(req: Request, res: Response): Promise<void> {
    try {
      const hoadonnhap = req.body as {id:any, TongTien:any};
      const results = await this.importedinvoiceService.updateImportedInvoicePice(hoadonnhap);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createImportedInvoice(req: Request, res: Response): Promise<void> {
    try {
      const hoadonnhap = req.body as {MaNV:any, TinhTrang:any, NgayNhap:any, TongTien:any, MaNCC:any};
      const results = await this.importedinvoiceService.createImportedInvoice(hoadonnhap);
      res.json({ message: 'Thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteImportedInvoice(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const hoadonnhap = req.body as {id:any};
      const results = await this.importedinvoiceService.deleteImportedInvoice(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createDetailImportedInvoice(req: Request, res: Response): Promise<void> {
    try {
      const chitiethdn = req.body as {idHDN:any, IDKho:any, SoLuong:any, Gia:any};
      const results = await this.importedinvoiceService.createDetailImportedInvoice(chitiethdn);
      res.json({ message: 'Thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteDetailImportedInvoice(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const chitiethdn = req.body as {id:any};
      const results = await this.importedinvoiceService.deleteDetailImportedInvoice(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async getImportedInvoiceByID(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.importedinvoiceService.getImportedInvoiceByID(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
}