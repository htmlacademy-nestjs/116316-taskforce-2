import {Task} from '@taskforce/shared-types';

export class TaskEntity implements Task {
  public _id: string;
  public createdAt: Date;
  public updatedAt?: Date;
  public authorId: string;
  public title: string;
  public description: string;
  public category: string;
  public price?: number;
  public deadline?: Date;
  public image?: string;
  public address?: string;
  public tags?: string[];
  public status: string;

  constructor(task: Task) {
    this.fillEntity(task);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(task: Task) {
    this._id = task._id;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
    this.authorId = task.authorId;
    this.title = task.title;
    this.description = task.description;
    this.category = task.category;
    this.price = task.price;
    this.deadline = task.deadline;
    this.image = task.image;
    this.address = task.address;
    this.tags = task.tags;
    this.status = task.status;
  }
}
