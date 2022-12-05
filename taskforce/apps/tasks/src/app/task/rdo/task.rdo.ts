import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class TaskRdo {
  @ApiProperty({
    description: 'Task id',
    example: '148234d6-9d3f-45b8-a2e4-d2267b1ee51a'
  })
  @Expose()
  _id: string;

  @ApiProperty({
    description: 'Task created',
    example: ''
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    description: 'Task updated',
    example: ''
  })
  @Expose()
  updatedAt: Date;

  @ApiProperty({
    description: 'Task title',
    example: 'Lorem Ipsum'
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Category 1'
  })
  @Expose()
  category: string;

  @ApiProperty({
    description: 'Task price',
    example: 1000
  })
  @Expose()
  price?: number;

  @ApiProperty({
    description: 'Task deadline',
    example: 1000
  })
  @Expose()
  deadline?: Date;

  @ApiProperty({
    description: 'Task image',
    example: 1000
  })
  @Expose()
  image?: string;

  @ApiProperty({
    description: 'Task address',
    example: 1000
  })
  @Expose()
  address?: string;

  @ApiProperty({
    description: 'Task tags',
    example: 1000
  })
  tags?: string[];
}
