import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import ApiResponse from 'src/core/api_response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('details/:movieId')
  async getMovieDetails(
    @Param('movieId') movieId: number,
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieService.getMovieDetails(movieId, page);
    return new ApiResponse(response, 200, 'Success');
  }

  @Get('latest')
  async getLatestMovies(@Query('page') page: number = 1): Promise<ApiResponse> {
    const response = await this.movieService.getLatestMovies(page);
    return new ApiResponse(response, 200, 'Success');
  }

  @Get(':movieId/similar')
  async getSimilarMovies(
    @Param('movieId') movieId: number,
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieService.getSimilarMovies(movieId, page);
    return new ApiResponse(response, 200, 'Success');
  }

  @Get(':movieId/recommended')
  async getRecommendedMovies(
    @Param('movieId') movieId: number,
    @Query('page') page: number = 1,
  ): Promise<ApiResponse> {
    const response = await this.movieService.getRecommendedMovies(
      movieId,
      page,
    );
    return new ApiResponse(response, 200, 'Success');
  }
}
