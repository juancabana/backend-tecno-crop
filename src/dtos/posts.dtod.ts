/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNumber,
  IsObject,
  IsArray,
  IsPositive,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreatePostDto {
  readonly id_user: object;
  readonly description: string;
  readonly tittle: string;
  readonly images: string[];
  readonly likes: number;
  readonly address: string;
  readonly category:
    | 'Cereals'
    | 'Legumes'
    | 'Oilseeds'
    | 'Vegetables'
    | 'Fruit trees'
    | 'Ornamentals'
    | 'Roots and tubers';
  readonly mass_unit: object;
  readonly ammount: number;
}
