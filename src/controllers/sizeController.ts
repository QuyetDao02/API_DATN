import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { SizeService } from '../services/sizeService';

@injectable()
export class SizeController {
  constructor(private sizeService: SizeService 
  ) { } 
  
  async getsizeById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const size = await this.sizeService.getsizeById(id);   
      if (size) {
        res.json(size);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getsizeAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.sizeService.getsizeAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updatesize(req: Request, res: Response): Promise<void> {
    try {
      const size = req.body as {idSize:any, dai:any, rong:any, cao:any, GhiChu:any};
      const results = await this.sizeService.updatesize(size);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createsize(req: Request, res: Response): Promise<void> {
    try {
      const size = req.body as {dai:any, rong:any, cao:any, GhiChu:any, idDNT:any};
      const results = await this.sizeService.createsize(size);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deletesize(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
      console.log(id)
      const size = req.body as {idSize:any};
      const results = await this.sizeService.deletesize(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}