import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BeersModule } from './beers/beers.module';
import { CourseModule } from './course/course.module';
import { CourseModule } from './course/course.module';
import { Course1Module } from './course1/course1.module';
import { CouseService } from './couse/couse.service';
import { CourseService } from './course/course.service';
import { CourseController } from './course/course.controller';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    BeersModule,
    CourseModule,
    Course1Module,
  ],
  providers: [CouseService, CourseService],
  controllers: [CourseController],
})
export class AppModule {}
