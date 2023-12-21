import { Controller, Get } from '@nestjs/common';
import { GenresService } from './genres.service';
import ApiResponse from 'src/core/api_response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get('movie-list')
  async getMovieList(): Promise<ApiResponse> {
    const response = await this.genresService.getMovieList();
    return new ApiResponse(response, 200, 'Success');
  }

  @Get('tv-list')
  async getTvList(): Promise<ApiResponse> {
    const response = await this.genresService.getTvList();
    return new ApiResponse(response, 200, 'Success');
  }
}
