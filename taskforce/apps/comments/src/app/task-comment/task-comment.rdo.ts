import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class TaskCommentRdo {
  @ApiProperty({
    description: 'The uniq comment ID',
    example: '3b7d-4bad'
  })
  @Expose()
  public _id: string;

  @ApiProperty({
    description: 'The uniq task ID',
    example: '9b1deb4d-3b7d-4bad'
  })
  @Expose()
  public taskId: string;

  @ApiProperty({
    description: 'The author ID',
    example: '9b1deb4d-3b7d-4bad'
  })
  @Expose()
  public authorId: string;

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
}
