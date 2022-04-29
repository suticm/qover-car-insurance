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
  universalPercentage: number;

  @Prop({
    required: true,
    min: 18,
  })
  ageRestriction: number;

  @Prop({
    required: true,
    default: false,
  })
  highRisk: boolean;
}

export const CarSchema = SchemaFactory.createForClass(Car);
