import type { Post as PostInterface } from '@/types';

class Post implements PostInterface {
  public static currentId = 2;
  public id: number;
  public content: string;
  public datePosted: string;
  public username: string;

  constructor(content: string, username: string) {
    this.id = Post.currentId++;
    this.content = content;
    this.datePosted = 'TEST DATE';
    this.username = username;
  }
}

export default Post;