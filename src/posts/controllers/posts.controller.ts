import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreatePostDto } from '../../posts/dtos/posts.dtod';

type Id = string | number;

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
  findOne(@Param('id') id: Id): object {
    return {
      message: `Obtener post by id ${id}`,
    };
  }

  // Get posts user
  @Get('user/:id')
  getPostsUser(@Param('id') id: Id): object {
    return {
      message: `Obtener posts de un usuario ${id}`,
    };
  }

  // Get favourites posts
  @Get('favourites/:id')
  getFavourites(@Param('id') id: Id): object {
    return {
      message: `Obtener favoritos ${id}`,
    };
  }

  // Crear post
  @Post()
  create(@Body() user: CreatePostDto): object {
    return {
      message: 'Create post',
      user,
    };
  }

  // Update description post
  @Patch('description')
  updateDescription(@Body() payload: object): object {
    return {
      message: 'Update description post',
      payload,
    };
  }

  // Update likes post
  @Patch('like')
  updateLike(@Body() payload: object): object {
    return {
      message: 'Update like post',
      payload,
    };
  }

  // Delete post
  @Delete(':id')
  delete(@Param('id') id: Id): object {
    return {
      message: `Delete post ${id}`,
    };
  }
}
