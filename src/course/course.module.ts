import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Course, CourseSchema} from "./course.schema";
import {CourseRepository} from "./couse.repository";

@Module({
  imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])],
  controllers: [CourseController],
  providers: [CourseRepository]
})
export class CourseModule {}
