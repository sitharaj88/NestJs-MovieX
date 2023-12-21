import { Controller, Get } from '@nestjs/common';
import { TrendingService } from './trending.service';
import ApiResponse from 'src/core/api_response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Trending')
@Controller('trending')
export class TrendingController {
  constructor(private readonly trendingService: TrendingService) {}

  @Get('movies')
  async getMovies(): Promise<ApiResponse> {
    const data = await this.trendingService.getMovies();
    return new ApiResponse(data, 200, 'Success');
  }

  @Get('tv')
  async getTv(): Promise<ApiResponse> {
    const data = await this.trendingService.getTv();
    return new ApiResponse(data, 200, 'Success');
  }

  @Get('all')
  async getAll(): Promise<ApiResponse> {
    const data = await this.trendingService.getAll();
    return new ApiResponse(data, 200, 'Success');
  }

  @Get('people')
  async getPeople(): Promise<ApiResponse> {
    const data = await this.trendingService.getPeople();
    return new ApiResponse(data, 200, 'Success');
  }
}
