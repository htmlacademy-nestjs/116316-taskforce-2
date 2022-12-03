import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {City, UserRole} from '@taskforce/shared-types';

export class ExecutorUserDto {
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
    description: 'User age',
    example: 23
  })
  public age: number;

  @ApiProperty({
    description: 'User role',
    example: 'Исполнитель'
  })
  public role: UserRole;

  @ApiProperty({
    description: 'User rate',
    example: 13
  })
  public rank: number;

  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User info',
    example: 'Lorem Ispum'
  })
  public info: string;

  @ApiProperty({
    description: 'User specialization',
    example: ['mechanic', 'programmer']
  })
  public specialization: string[];
}
