import { Body, Param, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/list')
  async findMovieList() {
    const movies = await this.movieService.findMovieList();
    return { errorCode: 200, movies: movies };
  }

  @Get(':uuid')
  async findMovie(@Param('uuid') uuid: string) {
    const movie = await this.movieService.findMovie(uuid);
    return { errorCode: 200, movie: movie };
  }

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto) {
    const movie = await this.movieService.createMovie(createMovieDto);
    return { errorCode: 201, movie: movie };
  }

  @Put(':uuid')
  async updateMovie(@Param('uuid') uuid: string, @Body() updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieService.updateMovie(uuid, updateMovieDto);
    return { errorCode: 200, movie: movie };
  }

  @Delete(':uuid')
  async deleteMovie(@Param('uuid') uuid: string) {
    const deleted = await this.movieService.deleteMovie(uuid);
    return { errorCode: 200, message: deleted ? 'successfully deleted' : 'not found' };
  }
}
