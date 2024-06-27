import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { Biblioteca, BibliotecaDocument } from './schemas/biblioteca.schemas';

@Injectable()
export class BibliotecaService {
  constructor(@InjectModel(Biblioteca.name) private bibliotecaModel: Model<BibliotecaDocument>) {}

  async create(createBibliotecaDto: CreateBibliotecaDto): Promise<Biblioteca> {
    const newBiblioteca = new this.bibliotecaModel(createBibliotecaDto);
    return newBiblioteca.save();
  }

  async findAll(): Promise<Biblioteca[]> {
    return this.bibliotecaModel.find().exec();
  }

  async findOne(id: string): Promise<Biblioteca> {
    return this.bibliotecaModel.findById(id).exec();
  }

  async update(id: string, updateBibliotecaDto: UpdateBibliotecaDto): Promise<Biblioteca> {
    return this.bibliotecaModel.findByIdAndUpdate(id, updateBibliotecaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Biblioteca> {
    return this.bibliotecaModel.findByIdAndDelete(id).exec();
  }
}
