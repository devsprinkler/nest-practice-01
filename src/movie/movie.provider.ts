import { Connection } from 'mongoose';
import { MovieSchema } from '../schemas/movie.schema';

export const movieProvider = [
  {
    provide: 'MOVIE_MODEL',
    useFactory: (connection: Connection) => connection.model('Movie', MovieSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];