import { IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class BookmarkDto {
  @IsUrl()
  url: string;

  @IsString()
  @MinLength(1)
  @MaxLength(30)
  title: string;

  @IsString()
  @MaxLength(200)
  description: string;
}
