import * as crypto from 'crypto';
import * as dayjs from 'dayjs';
import {Injectable} from '@nestjs/common';
import {CreateCommentDto} from './create-comment.dto';
import {TaskCommentEntity} from './task-comment.entity';
import {TaskCommentRepository} from './task-comment-repository';

@Injectable()
export class TaskCommentService {
  constructor(
    private readonly taskCommentRepository: TaskCommentRepository
  ) {}

  public async create(dto: CreateCommentDto) {
    const {text, taskId} = dto;

    const comment = {
      text,
      taskId,
      authorId: crypto.randomUUID(),
    }

    const commentEntity = await new TaskCommentEntity(comment);

    return this.taskCommentRepository.create(commentEntity);
  }

  public async destroy(id: string) {
    return this.taskCommentRepository.destroy(id);
  }

  public async show(id: string) {
    return this.taskCommentRepository.findById(id);
  }
}
