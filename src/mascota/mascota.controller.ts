import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './schemas/mascota.schemas';

@Controller('mascota')
export class MascotaController {

  constructor(private readonly mascotaService: MascotaService) {}

 
  @Get()
  findAll(): Promise<Mascota[]> {
    return this.mascotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id):Promise<Mascota> {
    return this.mascotaService.findOne(id);
  }
  @Post()
  create(@Body() createMascotaDto: CreateMascotaDto):Promise<Mascota> {
    return this.mascotaService.create(createMascotaDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMascotaDto: UpdateMascotaDto) {
    return this.mascotaService.update(id, updateMascotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id):Promise<Mascota> {
    return this.mascotaService.remove(id);
  }
}
