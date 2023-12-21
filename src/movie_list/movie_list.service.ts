import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MovieListService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getPopularMovies(page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_LIST_POPULAR_URL',
      )}&page=${page}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch popular movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getNowPlayingMovies(page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_LIST_NOW_PLAYING_URL',
      )}&page=${page}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch now playing movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTopRatedMovies(page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_LIST_TOP_RATED_URL',
      )}&page=${page}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch top rated movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUpcomingMovies(page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_LIST_UPCOMING_URL',
      )}&page=${page}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch upcoming movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
