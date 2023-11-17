import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CourseRepository} from "./couse.repository";
import {CreateCourseDto} from "./course.dto";

@Controller('course')
export class CourseController {
  constructor(private readonly courseRepo: CourseRepository) {}

  @Get()
  async findAll() {
    return this.courseRepo.findAll();
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseRepo.create(createCourseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.courseRepo.delete(id);
  }
}
