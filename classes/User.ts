import { UserInterface } from '@/types';

class User implements UserInterface {
  public static currentId = 0;
  public id: number;
  public username: string;
  public firstName: string;
  public lastName: string;
  public imageUrl: string;
  public followers: number;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    imageUrl: string,
    followers: number
  ) {
    this.id = User.currentId++;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.followers = followers;
  }
}

export default User;
