import {Review} from '@taskforce/shared-types';

export class TaskReviewEntity implements Review {
  public _id: string;
  public createdDate: Date;
  public text: string;
  public taskId: string;
  public rank: number;
  public authorId: string;

  constructor(taskReview: Review) {
    this.fillEntity(taskReview);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(taskReview: Review) {
    this._id = taskReview._id;
    this.createdDate = taskReview.createdDate;
    this.text = taskReview.text;
    this.taskId = taskReview.taskId;
    this.rank = taskReview.rank;
    this.authorId = taskReview.authorId;
  }
}
