import {Document, now} from 'mongoose';
import {Comment} from '@taskforce/shared-types';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
  collection: 'comments',
})
export class TaskCommentModel extends Document implements Comment {
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
}

export const TaskCommentSchema = SchemaFactory.createForClass(TaskCommentModel);
