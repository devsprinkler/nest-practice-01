import mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      mongoose.connect('mongodb://localhost:27017/movie'),
  },
];