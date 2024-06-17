import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { StatisticalService } from '../services/statistical.Service';

@injectable()
export class StatisticalController {
  constructor(private statisticalService: StatisticalService 
  ) { } 
  async getPiceDetailbill(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const NgayLap = req.params.NgayLap;
      
      const statistical = {TinhTrang:TinhTrang, NgayLap:NgayLap};
      const check = await this.statisticalService.getPiceDetailbill(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async statisticalInMonth(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const Thang = req.params.Thang;
      const Nam = req.params.Nam;
      
      const statistical = {TinhTrang:TinhTrang, Thang:Thang, Nam:Nam};
      const check = await this.statisticalService.statisticalInMonth(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async statisticalInYear(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const Nam = req.params.Nam;
      
      const statistical = {TinhTrang:TinhTrang, Nam:Nam};
      const check = await this.statisticalService.statisticalInYear(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async statisticalInDate(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const BatDau = req.params.BatDau;
      const KetThuc = req.params.KetThuc;
      
      const statistical = {TinhTrang:TinhTrang, BatDau:BatDau, KetThuc:KetThuc};
      const check = await this.statisticalService.statisticalInDate(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async gatBillInDay(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const NgayLap = req.params.NgayLap;
      
      const statistical = {TinhTrang:TinhTrang, NgayLap:NgayLap};
      const check = await this.statisticalService.gatBillInDay(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getBillInMonth(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const Thang = req.params.Thang;
      const Nam = req.params.Nam;
      
      const statistical = {TinhTrang:TinhTrang, Thang:Thang, Nam:Nam};
      const check = await this.statisticalService.getBillInMonth(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getBillInYear(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const Nam = req.params.Nam;
      
      const statistical = {TinhTrang:TinhTrang, Nam:Nam};
      const check = await this.statisticalService.getBillInYear(statistical);
      if (check) {
        res.json(check);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getBillInDate(req: Request, res: Response): Promise<void> {
    try {
      const TinhTrang = req.params.TinhTrang;
      const BatDau = req.params.BatDau;
      const KetThuc = req.params.KetThuc;
      
      const statistical = {TinhTrang:TinhTrang, BatDau:BatDau, KetThuc:KetThuc};
      const check = await this.statisticalService.getBillInDate(statistical);
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