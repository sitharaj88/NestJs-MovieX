import { Module } from '@nestjs/common';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TrendingModule } from './trending/trending.module';
import { MovieListModule } from './movie_list/movie_list.module';
import { GenresModule } from './genres/genres.module';
import { MovieModule } from './movie/movie.module';
import TimeConverter from './utils/TimeConverter';

@Module({
  imports: [
    CacheModule.register({
      ttl: TimeConverter.hoursToMilliseconds(1), // seconds
      max: 100, // maximum number of items in cache
      isGlobal: true,
    }), // Add this line to enable global cache
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
    }),
    TrendingModule,
    MovieListModule,
    GenresModule,
    MovieModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
