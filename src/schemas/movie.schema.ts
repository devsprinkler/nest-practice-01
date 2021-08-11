import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema ({
  uuid: String,
  title: String,
  description: String,
  director: String,
  cast: [String],
  genre: String,
  rating: String
}, { versionKey: false });