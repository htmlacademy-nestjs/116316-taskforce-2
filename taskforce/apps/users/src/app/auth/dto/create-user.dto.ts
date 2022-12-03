import {ApiProperty} from '@nestjs/swagger';
import {UserRole} from '@taskforce/shared-types';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'Keks'
  })
  public name: string;

  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User city',
    example: 'Москва'
  })
  public city: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;

  @ApiProperty({
    description: 'User role',
    example: 'Исполнитель'
  })
  public role: UserRole;

  @ApiProperty({
    description: 'User avatar',
    example: 'Исполнитель'
  })
  public avatar?: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1981-03-12',
  })
  public dateBirth: Date;
}
