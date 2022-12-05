import {Comment} from '@taskforce/shared-types';
import {CRUDRepository} from '@taskforce/core';
import {TaskCommentEntity} from './task-comment.entity';
import {Injectable} from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class TaskCommentMemoryRepository implements CRUDRepository<TaskCommentEntity, string, Comment> {
  private repository: {
    [key: string]: Comment
  } = {};

  public async create(item: TaskCommentEntity): Promise<Comment> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };

    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async update(id: string, item: TaskCommentEntity): Promise<Comment> {
    throw new Error('Method not implemented');
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<Comment | null> {
    throw new Error('Method not implemented');
  }

  public async findAllByTaskId(id: string): Promise<Comment[] | null> {
    const existComments = Object
      .values(this.repository)
      .filter(element => element.taskId === id);

    if (existComments.length === 0) {
      return null;
    }

    return existComments;
  }
}
