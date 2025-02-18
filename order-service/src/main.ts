import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: number = 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Iniciando Servicios para Ordenes em el Puerto: ${PORT}`)
  });
}
bootstrap();
