import { User } from "@prisma/client";

export type UserDto = Omit<User, "id" | "inserted_at">;