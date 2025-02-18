import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // De donde se consumen los productos.
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE', 
        transport: Transport.TCP, 
        options: {
          host: '127.0.0.1', 
          port: 3001
        }
      }
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
