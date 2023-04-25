import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/controllers/users.controller';
import { PostsController } from './posts/controllers/posts.controller';
import { CommentsController } from './comments/controllers/comments.controller';
import { UsersService } from './users/services/users.service';
import { PostsService } from './posts/services/posts.service';
import { CommentsService } from './comments/services/comments.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    CommentsController,
  ],
  providers: [AppService, UsersService, PostsService, CommentsService],
})
export class AppModule {}
