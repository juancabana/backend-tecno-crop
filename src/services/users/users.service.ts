import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Juan',
      last_name: 'Cabana',
      email: 'juand.cabanat@unac.edu.co',
    },
    {
      name: 'Daniel',
      last_name: 'Cabana',
      email: 'daniela.cabanat@unac.edu.co',
    },
  ];
}
