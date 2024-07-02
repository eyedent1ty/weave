interface Post {
  id: number;
  username: string;
  datePosted: string;
  content: string; 
  imagePostUrl: string | null;
  userImageUrl: string;
}

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  followers: number;
  bio: string;
  link: string;
}

export type { Post, User }