import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota, MascotaDocument } from './schemas/mascota.schemas';

@Injectable()
export class MascotaService {
  constructor(@InjectModel(Mascota.name) private mascotaModel: Model<MascotaDocument>) {}

  async create(createMascotaDto: CreateMascotaDto): Promise<Mascota> {
    const newMascota = new this.mascotaModel(createMascotaDto);
    return newMascota.save();
  }

  async findAll(): Promise<Mascota[]> {
    return this.mascotaModel.find().exec();
  }

  async findOne(id: string): Promise<Mascota> {
    return this.mascotaModel.findById(id).exec();
  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto): Promise<Mascota> {
    return this.mascotaModel.findByIdAndUpdate(id, updateMascotaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Mascota> {
    return this.mascotaModel.findByIdAndDelete(id).exec();
  }
}
