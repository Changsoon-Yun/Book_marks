import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class FolderDto {
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  name: string;

  @IsNumber()
  parentId: number;
}
