import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [HttpModule],
})
export class MovieModule {}
