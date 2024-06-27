import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMascotaDto {
  
  @IsNotEmpty()
  @IsString()
  raza: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  edad: number;
  
}
