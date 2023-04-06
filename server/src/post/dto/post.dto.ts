import { IsString, MaxLength, MinLength } from 'class-validator';

export class PostDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  title: string;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  content: string;
}
