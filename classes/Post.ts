import type { Post as PostInterface } from '@/types';

class Post implements PostInterface {
  public static currentId = 0;
  public id: number;
  public content: string;
  public datePosted: Date;
  public user: string;

  constructor(content: string, user: string) {
    this.id = Post.currentId++;
    this.content = content;
    this.datePosted = new Date();
    this.user = user;
  }
}

export default Post;