import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { ColorService } from '../services/colorService';

@injectable()
export class ColorController {
  constructor(private colorService: ColorService 
  ) { } 
  
  async getcolorById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const color = await this.colorService.getcolorById(id);   
      if (color) {
        res.json(color);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getcolorAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.colorService.getcolorAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updatecolor(req: Request, res: Response): Promise<void> {
    try {
      const color = req.body as {IDMauSac:any, MauSac:any, GhiChu:any, code:any};
      const results = await this.colorService.updatecolor(color);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createcolor(req: Request, res: Response): Promise<void> {
    try {
      const color = req.body as {MauSac:any, GhiChu:any, code:any};
      const results = await this.colorService.createcolor(color);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deletecolor(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const color = req.body as {IDMauSac:any};
      const results = await this.colorService.deletecolor(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async getcolorByProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const color = await this.colorService.getcolorByProduct(id);   
      if (color) {
        res.json(color);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async createdetailcolor(req: Request, res: Response): Promise<void> {
    try {
      const color = req.body as {idms:any, iddnt:any};
      const results = await this.colorService.createdetailcolor(color);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}