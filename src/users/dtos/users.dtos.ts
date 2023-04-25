/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNumber,
  IsUrl,
  IsEmail,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
  Max,
  Matches
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  // @IsOptional()
  // @Max(29)
  readonly first_name: string;

  @IsString()
  @IsNotEmpty()

  readonly last_name: string;

  @IsString()
  @IsNotEmpty()
  readonly nickname: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @Min(18)
  @Max(120)
  readonly age: number;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{10}$/)
  readonly phone_number: string;

  @IsString()
  @IsNotEmpty()
  readonly role: 'ADMIN' | 'CUSTOMER';

  @IsOptional()
  @IsArray()
  readonly favourites?: object[];
}
export class UpdateUserDto {
  readonly first_name?: string;
  readonly last_name?: string;
  readonly nickname?: string;
  readonly age?: number;
  readonly password?: string;
  readonly email?: string;
  readonly image?: string;
  readonly phone_number?: string;
  readonly role?: 'ADMIN' | 'CUSTOMER';
}
