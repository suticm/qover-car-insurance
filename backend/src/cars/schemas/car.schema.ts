import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = Car & Document;

export class Restriction {
  @Prop()
  name: string;
  @Prop()
  value: string;
}

const RestrictionSchema = SchemaFactory.createForClass(Restriction);

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
    type: [RestrictionSchema],
  })
  restrictions: Restriction[];
}

export const CarSchema = SchemaFactory.createForClass(Car);
