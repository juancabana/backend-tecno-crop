import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateComment } from '../../comments/dtos/comments.dtod';

@Controller('comments')
export class CommentsController {
  // Get all comments related to a post
  @Get(':id')
  findAll(@Param('id') id: string | number): object {
    return {
      message: `Obtener todos los comentarios de un post ${id}`,
    };
  }

  // Create new comment
  @Post(':id')
  create(
    @Param('id') id: string | number,
    @Body() payload: CreateComment,
  ): object {
    return {
      message: `Create new comment ${id}`,
      payload,
    };
  }

  // Update comment
  @Put(':id')
  update(@Param('id') id: string | number, @Body() payload: object): object {
    return {
      message: `Update comment ${id}`,
      payload,
    };
  }

  // Delete comment
  @Delete(':id')
  delete(@Param('id') id: string | number): object {
    return {
      message: `Delete comment ${id}`,
    };
  }
}
