import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  // Get all comments related to a post
  @Get(':id')
  findAll(): object {
    return {
      message: 'Obtener todos los comentarios de un post',
    };
  }

  // Create new comment
  @Post(':id')
  create(): object {
    return {
      message: 'Create new comment',
    };
  }

  // Update comment
  @Put(':id')
  update(): object {
    return {
      message: 'Update comment',
    };
  }

  // Delete comment
  @Delete(':id')
  delete(): object {
    return {
      message: 'Delete comment',
    };
  }
}
