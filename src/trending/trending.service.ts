import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TrendingService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getMovies() {
    try {
      const url = this.configService.get<string>('TMDB_TRENDING_MOVIES_URL');
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTv() {
    try {
      const url = this.configService.get<string>('TMDB_TRENDING_TV_URL');
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch tv shows',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAll() {
    try {
      const url = this.configService.get<string>('TMDB_TRENDING_ALL_URL');
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch trending',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getPeople() {
    try {
      const url = this.configService.get<string>('TMDB_TRENDING_PEOPLE_URL');
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch people',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
