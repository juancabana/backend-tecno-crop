/* eslint-disable prettier/prettier */
import { IsObject, IsString, IsDateString, IsNotEmpty} from 'class-validator';

export class CreateComment {

  @IsObject()
  @IsNotEmpty()
  readonly id_post: object;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsDateString()
  @IsNotEmpty()
  readonly creation_date: Date;
}
