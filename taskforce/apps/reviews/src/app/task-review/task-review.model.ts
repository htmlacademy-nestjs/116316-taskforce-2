import {Document, now} from 'mongoose';
import {Review} from '@taskforce/shared-types';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
  collection: 'reviews',
})
export class TaskReviewModel extends Document implements Review {
  @Prop({
    default: now()
  })
  public createdDate: Date;

  @Prop({
    required: true,
  })
  public taskId: string;

  @Prop({
    required: true,
  })
  public text: string;

  @Prop()
  public authorId: string;

  @Prop({
    required: true
  })
  public rank: number;
}

export const TaskReviewSchema = SchemaFactory.createForClass(TaskReviewModel);

