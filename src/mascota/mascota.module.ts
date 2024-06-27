import { Module } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mascota, MascotaSchema } from './schemas/mascota.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Mascota.name, schema: MascotaSchema }])],
  controllers: [MascotaController],
  providers: [MascotaService],
})
export class MascotaModule {}
