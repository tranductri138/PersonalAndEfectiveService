import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type CategoryDocument = Category & Document;

@Schema({
    timestamps: true,
})
export class Category {
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

export const CategorySchema = SchemaFactory.createForClass(Category);
