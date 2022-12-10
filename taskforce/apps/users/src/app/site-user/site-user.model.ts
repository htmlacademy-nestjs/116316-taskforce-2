import {Document, now} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {City, User, UserRole} from '@taskforce/shared-types';

@Schema({
  collection: 'users'
})
export class SiteUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
    type: String,
    enum: City,
    default: City.Moscow
  })
  public city: City;

  @Prop({
    required: true,
    default: now()
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.Customer
  })
  public role: UserRole;
}

export const SiteUserSchema = SchemaFactory.createForClass(SiteUserModel);
