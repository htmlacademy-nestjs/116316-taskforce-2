import {CRUDRepository} from '@taskforce/core';
import {SiteUserEntity} from './site-user.entity';
import {User} from '@taskforce/shared-types';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {SiteUserModel} from './site-user.model';
import {Model} from 'mongoose';

@Injectable()
export class SiteUserRepository implements CRUDRepository<SiteUserEntity, string, User> {
  constructor(
    @InjectModel(SiteUserModel.name) private readonly siteUserModel: Model<SiteUserModel>
  ) {}

  public async create(item: SiteUserEntity): Promise<User> {
    const newSiteUser = new this.siteUserModel(item);

    return newSiteUser.save();
  }

  public async destroy(id: string): Promise<void> {
    this.siteUserModel.deleteOne({id});
  }

  public async findById(id: string): Promise<User | null> {
    return this.siteUserModel
      .findOne({id})
      .exec();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.siteUserModel
      .findOne({email})
      .exec();
  }

  public async update(id: string, item: SiteUserEntity): Promise<User> {
    return this.siteUserModel
      .findByIdAndUpdate(id, item.toObject(), {new: true})
      .exec();
  }
}
