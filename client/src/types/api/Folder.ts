export interface Folder {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: number | null;
  userId: number;
  children?: Folder[];
}
