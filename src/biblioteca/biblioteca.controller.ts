import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import {Biblioteca } from './schemas/biblioteca.schemas';

@Controller('biblioteca')
export class BibliotecaController {

  constructor(private readonly bibliotecaService: BibliotecaService) {}

 
  @Get()
  findAll(): Promise<Biblioteca[]> {
    return this.bibliotecaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id):Promise<Biblioteca> {
    return this.bibliotecaService.findOne(id);
  }
  @Post()
  create(@Body() createBibliotecaDto: CreateBibliotecaDto):Promise<Biblioteca> {
    return this.bibliotecaService.create(createBibliotecaDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBibliotecaDto: UpdateBibliotecaDto) {
    return this.bibliotecaService.update(id, updateBibliotecaDto);
  }

  @Delete(':id')
  remove(@Param('id') id):Promise<Biblioteca> {
    return this.bibliotecaService.remove(id);
  }
}
