export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  published: boolean;
  created_at: Date;
}
