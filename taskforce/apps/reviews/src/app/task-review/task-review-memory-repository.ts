import * as crypto from 'crypto';
import {CRUDRepository} from '@taskforce/core';
import {TaskReviewEntity} from './task-review.entity';
import {Review} from '@taskforce/shared-types';

export class TaskReviewMemoryRepository implements CRUDRepository<TaskReviewEntity, string, Review> {
  private repository: {
    [key: string]: Review
  } = {}

  public async create(item: TaskReviewEntity): Promise<Review> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };

    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<Review | null> {
    throw new Error('Method not implemented');
  }

  public async update(id: string, item: TaskReviewEntity): Promise<Review> {
    throw new Error('Method not implemented');
  }
}
