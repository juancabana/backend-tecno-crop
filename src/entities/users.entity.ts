/* eslint-disable prettier/prettier */
export class User {
  id: number | string;
  first_name: string;
  last_name: string;
  nickname: string;
  age: number;
  password: string;
  email: string;
  image: string[];
  phone_number: number;
  role: 'ADMIN' | 'CUSTOMER';
  favourites: object[];
}
