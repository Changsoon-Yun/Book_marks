import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(user, postDto) {
    console.log(user, postDto);
  }
}
