import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, HydratedDocument } from 'mongoose';

export type MascotaDocument = HydratedDocument<Mascota>;

@Schema()
export class Mascota extends Document {
  @Prop()
  @IsNotEmpty()
  @IsString()
  raza: string;

  @Prop()
  @IsNotEmpty()
  @IsString()
  color: string;

  @Prop()
  @IsNotEmpty()
  @IsNumber()
  edad:number ;
  static save: any;
}

export const MascotaSchema = SchemaFactory.createForClass(Mascota);
