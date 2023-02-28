import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // Get user list
  @Get()
  getUsers(): object {
    return {
      message: 'Obtener ususarios',
    };
  }

  // get user by id
  @Get(':id')
  getUser(): object {
    return {
      message: 'Obtener usuario por id',
    };
  }

  // Get user and their crops
  @Get('crops/:id')
  getUserCrops(): object {
    return {
      message: 'Obtener usuarios con sus cosechas',
    };
  }

  // Create user
  @Post()
  createUser(): object {
    return {
      message: 'Create User',
    };
  }

  // Update phone number
  @Patch()
  updatePhoneNumber(): object {
    return {
      message: 'Actualizar numero de telefono',
    };
  }

  // Update first name
  @Patch()
  updateFirstName(): object {
    return {
      message: 'Actualizar nombre',
    };
  }

  // Update image
  @Patch()
  updateImage(): object {
    return {
      message: 'Actualizar imagen',
    };
  }

  // Remove user
  @Delete()
  deleteUser(): object {
    return {
      message: 'Eliminar usuario',
    };
  }
}
