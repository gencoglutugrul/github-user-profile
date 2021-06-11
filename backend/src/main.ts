import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/**
 * Auth Controller with form validation
 * JWT?
 * Github API Controller
 */

/**
 * /github/:userName
 * /github/:userName/repos
 * /auth/login
 * 
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
