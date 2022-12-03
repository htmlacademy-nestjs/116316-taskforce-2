import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {City, UserRole} from '@taskforce/shared-types';

export class CustomerUserDto {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks'
  })
  public name: string;

  @ApiProperty({
    description: 'Registration date',
    example: '13'
  })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: 'User city',
    example: 'Москва'
  })
  public city: City;

  @ApiProperty({
    description: 'Customer tasks count',
    example: 13
  })
  public tasks: number;

  @ApiProperty({
    description: 'Customer new tasks count',
    example: 13
  })
  public newTasks: number;

  @ApiProperty({
    description: 'Customer info',
    example: 'Lorem Ispum'
  })
  public info: string;
}
