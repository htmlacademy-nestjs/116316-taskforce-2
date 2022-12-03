import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import {TaskMemoryRepository} from './task-memory-repository';
import {TaskService} from './task.service';

@Module({
  providers: [TaskService, TaskMemoryRepository],
  controllers: [TaskController],
})
export class TaskModule {}
