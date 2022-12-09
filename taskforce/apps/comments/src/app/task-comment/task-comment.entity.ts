import {Comment} from '@taskforce/shared-types';

export class TaskCommentEntity implements Comment {
  public taskId: string;
  public text: string;
  public authorId: string;

  constructor(taskComment: Comment) {
    this.fillEntity(taskComment);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(taskComment: Comment) {
    this.taskId = taskComment.taskId;
    this.text = taskComment.text;
    this.authorId = taskComment.authorId;
  }
}
