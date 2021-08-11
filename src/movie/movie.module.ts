import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { movieProvider } from './movie.provider'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [
    MovieService,
    ...movieProvider
  ],
})

export class MovieModule {}