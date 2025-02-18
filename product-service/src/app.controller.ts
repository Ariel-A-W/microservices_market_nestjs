import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_products'})
  getProducts() {
    return this.appService.getProducts();
  }

  @MessagePattern({ cmd: 'get_product_by_id'})
  getProductById(id: number) {
    return this.appService.getProductById(id);
  }
}
