import {CRUDRepository} from '@taskforce/core';
import {TaskCommentEntity} from '../../../../comments/src/app/task-comment/task-comment.entity';
import {Review} from '@taskforce/shared-types';
import {InjectModel} from '@nestjs/mongoose';
import {TaskReviewModel} from './task-review.model';
import {Model} from 'mongoose';

export class TaskReviewRepository implements CRUDRepository<TaskCommentEntity, string, Review> {
  constructor(
    @InjectModel(TaskReviewModel.name) private readonly taskReviewModel: Model<TaskReviewModel>
  ) {}

  public async create(item: TaskCommentEntity): Promise<Review> {
    const newReview = new this.taskReviewModel(item);

    return newReview.save();
  }

  public async destroy(id: string): Promise<void> {
    this.taskReviewModel.deleteOne({_id: id});
  }

  public async findById(id: string): Promise<Review | null> {
    return this.taskReviewModel
      .findOne({_id: id})
      .exec();
  }

  public async update(id: string, item: TaskCommentEntity): Promise<Review> {
    return this.taskReviewModel
      .findByIdAndUpdate(id, item.toObject(), {new: true}).
      exec();
  }

}
