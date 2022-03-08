import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createEnderecosTable1644870609125 } from './database/migrations/1644870609125-createEnderecosTable';
import { createMedicosTable1644871509923 } from './database/migrations/1644871509923-createMedicosTable';
import { createEspecialidadesTable1644871529799 } from './database/migrations/1644871529799-createEspecialidadesTable';
import { EnderecoModule } from './endereco/endereco.module';
import { Endereco } from './endereco/entities/endereco.entity';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { Medico } from './medico/entities/medico.entity';
import { MedicoModule } from './medico/medico.module';

@Module({
  imports: [
    EspecialidadeModule,
    EnderecoModule,
    MedicoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Medico, Endereco, EspecialidadeModule],
      migrations: [`join(src, '**', '*.entity.{ts,js}')`],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
