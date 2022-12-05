import {ApiProperty} from '@nestjs/swagger';

export class TaskReviewDto {
  @ApiProperty({
    description: 'Task Id',
    example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  })
  public taskId: string;

  @ApiProperty({
    description: 'Review text',
    example: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  })
  public text: string;

  @ApiProperty({
    description: 'Executor rating',
    example: 3
  })
  public rank: number;
}
