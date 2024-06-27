
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MascotaModule } from './mascota/mascota.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rosscharr:%40Rossi12@rossi.pxp6xkx.mongodb.net/'),  // Asegúrate de que la URL de tu base de datos MongoDB sea correcta
    MascotaModule, BibliotecaModule, AuthModule, UsersModule,
  ],
})
export class AppModule {}
