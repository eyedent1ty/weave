interface Post {
  id: number;
  user: string;
  datePosted: Date;
  content: string;
}

interface UserInterface {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  followers: number;
}

export type { Post, UserInterface }