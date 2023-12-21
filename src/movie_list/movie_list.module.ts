import { Module } from '@nestjs/common';
import { MovieListController } from './movie_list.controller';
import { MovieListService } from './movie_list.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MovieListController],
  providers: [MovieListService],
})
export class MovieListModule {}
