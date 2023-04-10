import { IsString, MaxLength, MinLength } from 'class-validator';

export class PostDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  @MinLength(2)
  content: string;
}
