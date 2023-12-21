import { Controller, Get, Query } from '@nestjs/common';
import { MovieListService } from './movie_list.service';
import ApiResponse from 'src/core/api_response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Movie List')
@Controller('movie-list')
export class MovieListController {
  constructor(private readonly movieListService: MovieListService) {}

  @Get('popular')
  async getPopularMovies(
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieListService.getPopularMovies(page);
    return new ApiResponse(response, 200, 'Success');
  }

  @Get('now-playing')
  async getNowPlayingMovies(
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieListService.getNowPlayingMovies(page);
    return new ApiResponse(response, 200, 'Success');
  }

  @Get('top-rated')
  async getTopRatedMovies(
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieListService.getTopRatedMovies(page);
    return new ApiResponse(response, 200, 'Success');
  }

  @Get('upcoming')
  async getUpcomingMovies(
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieListService.getUpcomingMovies(page);
    return new ApiResponse(response, 200, 'Success');
  }
}
