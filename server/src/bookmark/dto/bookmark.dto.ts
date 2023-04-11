import { IsString, IsUrl, MaxLength } from 'class-validator';

export class BookmarkDto {
  @IsUrl()
  url: string;

  @IsString()
  @MaxLength(200)
  content: string;
}
