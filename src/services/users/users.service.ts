import { Injectable } from '@nestjs/common';
import { User } from './../../entities/users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: { id: '193984' },
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
  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
}
