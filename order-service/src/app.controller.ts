import { Controller, Get, Param } from '@nestjs/common';
import { Inject } from '@nestjs/common'; 
import { lastValueFrom, firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class AppController {
  constructor(@Inject('PRODUCT_SERVICE') private readonly client: ClientProxy) {}

  @Get('products')
  async getProducts() {
    const pro$ = await this.client.send({ cmd: 'get_products'}, {}); 
    return await lastValueFrom(pro$);
  }

  @Get('products/:id') 
  async getProductById(@Param('id') id: number) {
    const pro1$ = await this.client.send({ cmd: 'get_product_by_id'}, id); 
    return await firstValueFrom(pro1$);
  }
}
