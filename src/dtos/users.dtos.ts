/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsUrl, IsEmail, IsArray, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
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
  readonly phone_number: string;

  @IsString()
  @IsNotEmpty()
  readonly role: 'ADMIN' | 'CUSTOMER';

  @IsOptional()
  @IsArray()
  readonly favourites?: object[]
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
