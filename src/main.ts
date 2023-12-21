import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

function configureSwagger(app: INestApplication<AppModule>) {
  const options = new DocumentBuilder()
    .setTitle('NestJs MovieX API')
    .setDescription(
      'The "NestJs MovieX API" is a web-based application programming interface (API) developed using the NestJS framework, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. This API is designed to provide data and functionality related to movies, as suggested by the name "MovieX". The specific features and endpoints provided by this API could include operations like fetching movie details, searching for movies, managing user ratings and reviews, and more. The exact capabilities would depend on the specific implementation of the API',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureSwagger(app);
  await app.listen(3000);
}
bootstrap();
