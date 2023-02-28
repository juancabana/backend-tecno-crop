import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { CommentsController } from './controllers/comments/comments.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    CommentsController,
  ],
  providers: [AppService],
})
export class AppModule {}
