import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { Especialidade } from 'src/especialidade/entities/especialidade.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medico, Especialidade, Endereco])],
  controllers: [MedicoController],
  providers: [MedicoService],
})
export class MedicoModule {}
