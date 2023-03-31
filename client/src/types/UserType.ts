export interface Id {
  id: number;
}

export interface NewUser {
  name: string;
}

export type User = Id & NewUser;
