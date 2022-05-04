import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({
    trim: true,
    unique: true,
    required: true,
  })
  manufacturer: string;

  @Prop({
    required: true,
  })
  globalPrice: number;

  @Prop({
    required: true,
  })
  universalPercentageCoefficient: number;

  @Prop({
    required: true,
    min: 18,
  })
  minAgeRestriction: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
