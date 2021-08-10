import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "error", "warn"],
  });
  app.enableCors();
  app.use(helmet());
  await app.listen(PORT);
}
bootstrap()
  .then(() => {
    console.log(`Server listening on port ${PORT}`);
  });
