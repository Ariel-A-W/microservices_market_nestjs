import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP, 
    options: {
      host: '127.0.0.1', 
      port: 3001,
    },
  });
  await app.listen();
  console.log('Iniciando Servicios para Productos em el Puerto 3001');  
}
bootstrap();
