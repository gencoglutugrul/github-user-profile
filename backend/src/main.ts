import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/**
 * Auth Controller with form validation
 * JWT?
 * Github API Controller
 */

/**
 * GET  /api/github/:userName
 * GET  /api/github/:userName/repos
 * POST /api/auth/login
 * 
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
