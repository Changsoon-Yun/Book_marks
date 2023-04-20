import { IsString, IsUrl } from 'class-validator';

export class BookmarkDto {
  @IsUrl()
  url: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  imageUrl: string;

  @IsString()
  faviconUrl: string;
}
