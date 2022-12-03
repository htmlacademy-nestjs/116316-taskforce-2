import {ApiProperty} from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Task title',
    example: 'Lorem Ipsum'
  })
  title?: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  })
  description?: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Category 1'
  })
  category?: string;

  @ApiProperty({
    description: 'Task price',
    example: 1000
  })
  price?: number;

  @ApiProperty({
    description: 'Task deadline',
    example: 1000
  })
  deadline?: Date;

  @ApiProperty({
    description: 'Task image',
    example: 1000
  })
  image?: string;

  @ApiProperty({
    description: 'Task address',
    example: 1000
  })
  address?: string;

  @ApiProperty({
    description: 'Task tags',
    example: 1000
  })
  tags?: string[];
}
