import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';
import { Model } from 'mongoose';
import { Movie } from '../interfaces/movie.interface';
import { v4 } from 'uuid';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_MODEL')
    private movieModel: Model<Movie>,
  ) {}

  async findMovie(uuid: string): Promise<Movie> {
    return this.movieModel.findOne({ uuid: uuid });
  }

  async findMovieList(): Promise<Movie[]> {
    return this.movieModel.find();
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    createMovieDto.uuid = v4();
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  async updateMovie(uuid: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    await this.movieModel.updateOne({ uuid: uuid }, { $set: updateMovieDto });
    return this.movieModel.findOne({ uuid: uuid });
  }

  async deleteMovie(uuid: string): Promise<boolean> {
    const res = await this.movieModel.deleteOne({ uuid: uuid });
    return res.deletedCount === 1;
  }
}
