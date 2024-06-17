import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { ProductService } from '../services/productService';

@injectable()
export class ProductController {
  constructor(private productService: ProductService 
  ) { } 
  
  
  async productnew(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.productNew();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getproductAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.getallproduct();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getallproductimage(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.getallproductimage();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getallproductprice(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.getallproductprice();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async sellingProduct(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.sellingProduct();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async representativeProduct(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.representativeProduct();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getProductId(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const product = await this.productService.getProductById(id);   
      if (product) {
        res.json(product);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getProductIdAdmin(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const product = await this.productService.getProductByIdAdmin(id);   
      if (product) {
        res.json(product);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getProductCategoryId(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const product = await this.productService.getProductCategoryById(id);   
      if (product) {
        res.json(product);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async updateproduct(req: Request, res: Response): Promise<void> {
    try {
      const product = req.body as {id:any, TenDNT:any, MaLDNT:any, HinhAnh:any, MoTa:any, GiaTB:any, idhang:any};
      const results = await this.productService.updateproduct(product);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createproduct(req: Request, res: Response): Promise<void> {
    try {
      const product = req.body as {TenDNT:any, MaLDNT:any, idhang:any, HinhAnh:any, MoTa:any};
      const results = await this.productService.createproduct(product);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteproduct(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const product = req.body as {id:any};
      const results = await this.productService.deleteproduct(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async getallproductAdmin(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productService.getallproductAdmin();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getProductImageOfColor(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const idms = req.params.idms;
      
      const product = {id:id, idms:idms};
      const check = await this.productService.getProductImageOfColor(product);
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