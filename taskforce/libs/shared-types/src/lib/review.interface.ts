export interface Review {
  _id: string;
  createdDate: Date;
  authorId: string;
  text: string;
  taskId: string;
  rank: number;
}
