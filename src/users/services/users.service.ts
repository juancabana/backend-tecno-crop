import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../users/entities/users.entity';
import { CreateUserDto } from '../../users/dtos/users.dtos';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '193984',
      first_name: 'Juan',
      last_name: 'Cabana',
      nickname: 'cabanajuan',
      age: 19,
      password: 'ijdnwdw',
      email: 'juand.cabanat@unac.edu.co',
      image: ['image1', 'image2'],
      phone_number: 3053194924,
      role: 'ADMIN',
      favourites: [{ tittle: 'favourite1' }, { tittle: 'favourite2' }],
    },
  ];

  findAll() {
    return this.users;
  }
  findOne(id: number | string) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException('Producto no encontrado');
    }
    return user;
  }
  create(payload: CreateUserDto) {
    return payload;
  }
}
