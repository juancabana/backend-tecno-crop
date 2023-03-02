import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './../../services/users/users.service';

type Id = string | number;

type PhoneNumber = {
  id: string | number;
  phone: number;
};
type Name = {
  id: string | number;
  name: string;
};
type Image = {
  id: string | number;
  image: string;
};

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Get user list
  @Get()
  getUsers(): object {
    return this.usersService.findAll();
  }

  // get user by id
  @Get(':id')
  getUser(@Param('id') id: Id): object {
    return {
      message: `Obtener usuario por id ${id}`,
    };
  }

  // Get user and their crops
  @Get('crops/:id')
  getUserCrops(@Param('id') id: Id): object {
    return {
      message: `Obtener usuarios con sus cosechas ${id}`,
    };
  }

  // Create user
  @Post()
  createUser(@Body() user: object): object {
    return {
      message: 'Create User',
      user,
    };
  }

  // Update phone number
  @Patch('phone')
  updatePhoneNumber(@Body() body: PhoneNumber): object {
    return {
      message: `Actualizar numero de telefono`,
      body,
    };
  }

  // Update first name
  @Patch('name')
  updateFirstName(@Body() body: Name): object {
    return {
      message: `Actualizar nombre`,
      body,
    };
  }

  // Update image
  @Patch('image/:id')
  updateImage(@Body() body: Image): object {
    return {
      message: 'Actualizar imagen',
      body,
    };
  }

  // Remove user
  @Delete(':id')
  deleteUser(@Param('id') id: Id): object {
    return {
      message: `Eliminar usuario ${id}`,
    };
  }
}
