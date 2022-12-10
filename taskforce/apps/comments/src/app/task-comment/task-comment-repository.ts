import {CRUDRepository} from '@taskforce/core';
import {TaskCommentEntity} from './task-comment.entity';
import {Comment} from '@taskforce/shared-types';
import {InjectModel} from '@nestjs/mongoose';
import {TaskCommentModel} from './task-comment.model';
import {Model} from 'mongoose';

export class TaskCommentRepository implements CRUDRepository<TaskCommentEntity, string, Comment> {
  constructor(
    @InjectModel(TaskCommentModel.name) private readonly taskCommentModel: Model<TaskCommentModel>
  ) {}

  public async create(item: TaskCommentEntity): Promise<Comment> {
    const newComment = new this.taskCommentModel(item);

    return  newComment.save();
  }

  public async destroy(id: string): Promise<void> {
    this.taskCommentModel.deleteOne({_id: id});
  }

  public async findById(id: string): Promise<Comment | null> {
    return this.taskCommentModel
      .findOne({_id: id})
      .exec();
  }

  public async update(id: string, item: TaskCommentEntity): Promise<Comment> {
    return this.taskCommentModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
