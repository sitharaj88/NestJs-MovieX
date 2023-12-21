import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MovieService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getMovieDetails(movieId: number, page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_DETAILS_URL',
      )}&page=${page}`.replace(':TMDB_MOVIE_ID', movieId.toString());
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch movie details',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getLatestMovies(page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_LATEST_URL',
      )}&page=${page}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch latest movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getSimilarMovies(movieId: number, page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_SIMILAR_URL',
      )}&page=${page}`.replace(':TMDB_MOVIE_ID', movieId.toString());
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch similar movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getRecommendedMovies(movieId: number, page: number) {
    try {
      const url = `${this.configService.get<string>(
        'TMDB_MOVIE_RECOMMENDED_URL',
      )}&page=${page}`.replace(':TMDB_MOVIE_ID', movieId.toString());
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch recommended movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
