import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/userRepository';

@injectable()
export class UserService {
  constructor(private userRepository: UserRepository
  ) {}
  async authenticate(username: string, password: string): Promise<any> {     
    let user = await this.userRepository.GetUserByAccount(username, password);
    if (user) { 
      return {
        user_id: user.user_id,
        hoten: user.hoten,
        username: user.username 
      };
    }
    return null;
  }
  async getuserAll(): Promise<any> {
    return this.userRepository.getuserAll();
  }
  async getcustomerAll(): Promise<any> {
    return this.userRepository.getcustomerAll();
  }
  async getstaffAll(): Promise<any> {
    return this.userRepository.getstaffAll();
  }
  async getcustomerId(id: string): Promise<any> {
    return this.userRepository.getcustomerId(id);
  }
  async register(user: any): Promise<any> {
    return this.userRepository.register(user);
  }
  async registercus(user: any): Promise<any> {
    return this.userRepository.registercus(user);
  }
}