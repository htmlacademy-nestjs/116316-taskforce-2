import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class TaskReviewRdo {
  @ApiProperty({
    description: 'Review ID',
    example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  })
  @Expose()
  public _id: string;

  @ApiProperty({
    description: 'The uniq task ID',
    example: '9b1deb4d-3b7d-4bad'
  })
  @Expose()
  public taskId: number;

  @ApiProperty({
    description: 'The review author ID',
    example: '9b1deb4d-3b7d-4bad'
  })
  @Expose()
  public authorId: number;

  @ApiProperty({
    description: 'Comment date (ISO format)',
    example: '1981-03-12'
  })
  @Expose()
  public createdDate: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'Executor rating',
    example: 3
  })
  @Expose()
  public rate: number;
}
