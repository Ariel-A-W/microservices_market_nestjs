import { Controller, Get, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Controller('gateway')
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @Get('products')
  async getProducts() {
    const resp = await this.httpService.axiosRef.get('http://localhost:3002/orders/products');
    return resp.data;
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number) {
    const resp = await this.httpService.axiosRef.get(
      `http://localhost:3002/orders/products/${id}`
    );
    return resp.data;
  }
}
