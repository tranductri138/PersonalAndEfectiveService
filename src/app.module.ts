import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {BeersModule} from './beers/beers.module';
import {CourseModule} from './course/course.module';
import { CategoryModule } from './category/category.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.development.env',
        }),
        MongooseModule.forRoot(process.env.DATABASE_URI),
        BeersModule,
        CourseModule,
        CategoryModule,
    ],
})
export class AppModule {}
