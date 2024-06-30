interface Post {
  id: number;
  username: string;
  datePosted: string;
  content: string;
}

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  followers: number;
}

export type { Post, User }