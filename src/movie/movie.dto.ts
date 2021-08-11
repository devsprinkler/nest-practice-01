export class CreateMovieDto {
  uuid?: string;
  readonly title: string;
  readonly description: string;
  readonly director: string;
  readonly cast: string[];
  readonly genre: string;
  readonly rating: string;
}

export class UpdateMovieDto {
  readonly title?: string;
  readonly description?: string;
  readonly director?: string;
  readonly cast?: string[];
  readonly genre?: string;
  readonly rating?: string;
}