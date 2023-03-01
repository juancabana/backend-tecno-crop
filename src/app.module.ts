import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { CommentsController } from './controllers/comments/comments.controller';
import { UsersService } from './services/users/users.service';
import { PostsService } from './services/posts/posts.service';
import { CommentsService } from './services/comments/comments.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    CommentsController,
  ],
  providers: [AppService, UsersService, PostsService, CommentsService],
})
export class AppModule {}
