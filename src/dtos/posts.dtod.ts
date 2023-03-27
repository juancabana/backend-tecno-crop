/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNumber,
  IsObject,
  IsArray,
  IsPositive,
  IsNotEmpty,
} from 'class-validator';

export class CreatePostDto {
  @IsObject()
  @IsNotEmpty()
  readonly id_user: object;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly tittle: string;

  @IsArray()
  @IsNotEmpty()
  readonly images: string[];

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly likes: number;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly category:
    | 'Cereals'
    | 'Legumes'
    | 'Oilseeds'
    | 'Vegetables'
    | 'Fruit trees'
    | 'Ornamentals'
    | 'Roots and tubers';

  @IsObject()
  @IsNotEmpty()
  readonly mass_unit: object;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly ammount: number;
}
