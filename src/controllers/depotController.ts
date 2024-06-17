import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DepotService } from '../services/depotSevice';

@injectable()
export class DepotController {
  constructor(private depotService: DepotService 
  ) { } 
  
  async getDepotById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const Depot = await this.depotService.getDepotById(id);   
      if (Depot) {
        res.json(Depot);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getDepotAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.depotService.getDepotAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateDepot(req: Request, res: Response): Promise<void> {
    try {
      const Depot = req.body as {idKho:any, idSanPham:any, MaMau:any, idhang:any, idKichThuoc:any, SoLuongTon:any};
      const results = await this.depotService.updateDepot(Depot);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }

  async updateQuantyDepot(req: Request, res: Response): Promise<void> {
    try {
      const Depot = req.body as {MaKho:any, SoLuong:any};
      const results = await this.depotService.updateQuantyDepot(Depot);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  
  async createDepot(req: Request, res: Response): Promise<void> {
    try {
      const Depot = req.body as {MaDNT:any, idSize:any, idMauSac:any, SoLuong:any};
      const results = await this.depotService.createDepot(Depot);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteDepot(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
      console.log(id)
      const Depot = req.body as {idKho:any};
      const results = await this.depotService.deleteDepot(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async getDepotByProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const Depot = await this.depotService.getDepotByProduct(id);   
      if (Depot) {
        res.json(Depot);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getDepotByIdInColorSize(req: Request, res: Response): Promise<void> {
    try {
      const idsize = req.params.idSize;
      const idmausac = req.params.idMauSac;
      
      const depot = {idSize:idsize, idMauSac:idmausac};
      const check = await this.depotService.getDepotByIdInColorSize(depot);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
}