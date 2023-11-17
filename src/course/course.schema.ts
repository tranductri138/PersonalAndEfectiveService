import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({
    timestamps: true,
})
export class Course {
    @Prop({type: String, required: true})
    user_id: string;

    @Prop({type: String, required: true})
    title: string;

    @Prop({type: [String],})
    description: string[];

    @Prop({type: [String]})
    image_url: string[];

    @Prop({type: Number, require: true})
    price: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
