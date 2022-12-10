import { Module } from '@nestjs/common';
import { TaskCommentService } from './task-comment.service';
import { TaskCommentController } from './task-comment.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {TaskCommentModel, TaskCommentSchema} from './task-comment.model';
import {TaskCommentRepository} from './task-comment-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: TaskCommentModel.name, schema: TaskCommentSchema}
    ]),
  ],
  providers: [TaskCommentService, TaskCommentRepository],
  controllers: [TaskCommentController],
  exports: [TaskCommentService]
})
export class TaskCommentModule {}
