import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "error", "warn"],
  });
  app.enableCors();
  await app.listen(PORT);
}
bootstrap()
  .then(() => {
    console.log(`Server listening on port ${PORT}`);
  });
