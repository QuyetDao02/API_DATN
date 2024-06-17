import { injectable } from 'tsyringe';
import { ProductRepository } from '../repositories/productRepository';

@injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository
  ) {}
  async productNew(): Promise<any> {
    return this.productRepository.productNew();
  }
  async getallproduct(): Promise<any> {
    return this.productRepository.getallproduct();
  }
  async getallproductimage(): Promise<any> {
    return this.productRepository.getallproductimage();
  }
  async getallproductprice(): Promise<any> {
    return this.productRepository.getallproductprice();
  }
  async sellingProduct(): Promise<any> {
    return this.productRepository.sellingProduct();
  }
  async representativeProduct(): Promise<any> {
    return this.productRepository.representativeProduct();
  }
  async getProductById(id: string): Promise<any> {
    return this.productRepository.getProductId(id);
  }
  async getProductByIdAdmin(id: string): Promise<any> {
    return this.productRepository.getProductIdADMIN(id);
  }
  async getProductCategoryById(id: string): Promise<any> {
    return this.productRepository.getProductCategoryId(id);
  }
  async updateproduct(product: any): Promise<any> {
    return this.productRepository.updateproduct(product);
  }
  async createproduct(product: any): Promise<any> {
    return this.productRepository.createproduct(product);
  }
  async deleteproduct(id: any): Promise<any> {
    return this.productRepository.deleteproduct(id);
  }
  async getallproductAdmin(): Promise<any> {
    return this.productRepository.getallproductAdmin();
  }
  async getProductImageOfColor(product: any): Promise<any> {
    return this.productRepository.getProductImageOfColor(product);
  }
}