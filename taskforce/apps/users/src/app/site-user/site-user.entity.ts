import {City, User, UserRole} from '@taskforce/shared-types';
import {compare, genSalt, hash} from 'bcrypt';
import {SALT_ROUNDS} from './site-user.constant';

export class SiteUserEntity implements User {
  public _id: string;
  public name: string;
  public email: string;
  public city: City;
  public passwordHash: string;
  public role: UserRole;
  public avatar: string;
  public dateBirth: Date;

  constructor(siteUser: User) {
    this.fillEntity(siteUser);
  }

  public async setPassword(password: string): Promise<SiteUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(siteUser: User) {
    this._id = siteUser._id;
    this.name = siteUser.name;
    this.email = siteUser.email;
    this.city = siteUser.city;
    this.passwordHash = siteUser.passwordHash;
    this.role = siteUser.role;
    this.avatar = siteUser.avatar;
    this.dateBirth = siteUser.dateBirth;
  }
}
