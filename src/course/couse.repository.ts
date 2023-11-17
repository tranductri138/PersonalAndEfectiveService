import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.schema';

@Injectable()
export class CourseRepository {
    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

    async create(createBeerDto): Promise<Course> {
        const createdBeer = new this.courseModel(createBeerDto);
        return createdBeer.save();
    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.find().exec();
    }

    async delete(id: string) {
        return this.courseModel.deleteOne({ _id: id });
    }
}
