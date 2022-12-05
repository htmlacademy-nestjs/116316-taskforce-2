import * as crypto from 'crypto';
import * as dayjs from 'dayjs';
import { Injectable } from '@nestjs/common';
import {TaskMemoryRepository} from './task-memory-repository';
import {TaskDto} from './dto/task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {TaskEntity} from './task.entity';
import {TaskStatus} from '@taskforce/shared-types';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskMemoryRepository
  ) {}

  public async create(dto: TaskDto) {
    const {
      title,
      description,
      category,
      price,
      deadline,
      image,
      address,
      tags
    } = dto;

    const task = {
      createdAt: dayjs().toDate(),
      authorId: crypto.randomUUID(),
      status: TaskStatus.New,
      title,
      description,
      category,
      price,
      deadline,
      image,
      address,
      tags
    }

    const taskEntity = await new TaskEntity(task);

    return this.taskRepository.create(taskEntity);
  }

  public async destroy(id: string) {
    return this.taskRepository.destroy(id);
  }

  public async update(id: string, dto: UpdateTaskDto) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    const updatedTask = Object.assign({
      ...task,
      updatedAt: dayjs().toDate()
    }, dto);

    const updatedTaskEntity = await new TaskEntity(updatedTask);

    return this.taskRepository.update(id, updatedTaskEntity);
  }

  public async show(id: string) {
    return this.taskRepository.findById(id);
  }
}
