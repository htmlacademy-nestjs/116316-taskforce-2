export interface Task {
  _id?: string;
  createdAt: Date;
  updatedAt?: Date;
  authorId: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  deadline?: Date;
  image?: string;
  address?: string;
  tags?: string[];
  status: string;
}
