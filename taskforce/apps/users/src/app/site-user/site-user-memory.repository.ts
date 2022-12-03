import {Injectable} from '@nestjs/common';
import * as crypto from 'crypto';
import {CRUDRepository} from '@taskforce/core';
import {SiteUserEntity} from './site-user.entity';
import {User} from '@taskforce/shared-types';

@Injectable()
export class SiteUserMemoryRepository implements CRUDRepository<SiteUserEntity, string, User> {
  private repository: {[key: string]: User} = {};

  public async create(item: SiteUserEntity): Promise<User> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: SiteUserEntity): Promise<User> {
    this.repository[id] = {...item.toObject(), _id: id};

    return this.findById(id);
  }

  public async findById(id: string): Promise<User> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const existUser = Object.values(this.repository)
      .find((userItem) => userItem.email === email);

    if (!existUser) {
      return null;
    }

    return {...existUser};
  }
}
