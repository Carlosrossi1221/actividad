import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBibliotecaDto {

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  autor: string;

  @IsNotEmpty()
  @IsNumber()
  editorial: number;
}
