import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GenresService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getMovieList() {
    try {
      const url = this.configService.get('TMDB_GENRE_MOVIE_LIST_URL');
      const { data } = await this.httpService.axiosRef.get(url);
      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch movie list',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTvList() {
    try {
      const url = this.configService.get('TMDB_GENRE_TV_LIST_URL');
      const { data } = await this.httpService.axiosRef.get(url);
      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch tv list',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
