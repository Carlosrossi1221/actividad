import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document, HydratedDocument } from 'mongoose';

export type BibliotecaDocument = HydratedDocument<Biblioteca>;

@Schema()
export class Biblioteca extends Document {
  @Prop()
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @Prop()
  @IsNotEmpty()
  @IsString()
  autor: string;

  @Prop()
  @IsNotEmpty()
  @IsNumber()
  editorial: number;
  static save: any;
}

export const BibliotecaSchema = SchemaFactory.createForClass(Biblioteca);
