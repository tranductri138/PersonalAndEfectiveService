import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.schema';
import {CreateCourseDto} from "./course.dto";

@Injectable()
export class CourseRepository {
    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

    async create(CreateCourseDto: CreateCourseDto): Promise<Course> {
        const createdBeer = new this.courseModel(CreateCourseDto);
        return createdBeer.save();
    }

    async findAll(): Promise<Course[]> {
        const a = ['a']
        return this.courseModel.find().exec();
    }

    async delete(id: string) {
        return this.courseModel.deleteOne({ _id: id });
    }
}
