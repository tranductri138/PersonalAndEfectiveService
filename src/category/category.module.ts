import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import {CategoryRepository} from "./category.repository";
import {MongooseModule} from "@nestjs/mongoose";
import {Category, CategorySchema} from "./category.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryRepository]
})
export class CategoryModule {}
