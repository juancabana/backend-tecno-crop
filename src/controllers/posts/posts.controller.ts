import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  // Get posts
  @Get()
  findAll(): object {
    return {
      message: 'Obtener posts',
    };
  }
  // Get post
  @Get(':id')
  findOne(): object {
    return {
      message: 'Obtener post by id',
    };
  }

  // Get posts user
  @Get('user/:id')
  getPostsUser(): object {
    return {
      message: 'Obtener posts de un usuario',
    };
  }

  // Get favourites posts
  @Get('favourites/:id')
  getFavourites(): object {
    return {
      message: 'Obtener favoritos',
    };
  }

  // Crear post
  @Post()
  create(): object {
    return {
      message: 'Create post',
    };
  }

  // Update description post
  @Patch('description/:id')
  updateDescription(): object {
    return {
      message: 'Update description post',
    };
  }

  // Update likes post
  @Patch('like/:id')
  updateLike(): object {
    return {
      message: 'Update like post',
    };
  }

  // Delete post
  @Delete(':id')
  delete(): object {
    return {
      message: 'Delete post',
    };
  }
}
