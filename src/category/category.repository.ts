import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Category, CategoryDocument} from "./category.schema";

@Injectable()
export class CategoryRepository {
    constructor(@InjectModel(Category.name) private courseModel: Model<CategoryDocument>) {}


    async findAll(): Promise<Category[]> {
        return this.courseModel.find().exec();
    }

    async delete(id: string) {
        return this.courseModel.deleteOne({ _id: id });
    }
}
