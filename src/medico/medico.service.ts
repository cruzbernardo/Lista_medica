import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Especialidade } from 'src/especialidade/entities/especialidade.entity';
import { Repository } from 'typeorm';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from './entities/medico.entity';

@Injectable()
export class MedicoService {
  @InjectRepository(Medico)
  private readonly medicoRepository: Repository<Medico>;
  @InjectRepository(Especialidade)
  private readonly especialidadeRepository: Repository<Especialidade>;
  @InjectRepository(Endereco)
  private readonly enderecoRespoistoy: Repository<Endereco>;

  async create({ endereco, ...medicoDto }: CreateMedicoDto): Promise<Medico> {
    const medico = this.medicoRepository.create(medicoDto);
    const enderecoDto = await this.enderecoRespoistoy.save(endereco);
    medico.endereco = enderecoDto;
    return await this.medicoRepository.save(medico);
  }

  async findAll(): Promise<Medico[]> {
    return await this.medicoRepository.find({
      relations: ['especialidades'],
    });
  }

  async findOne(id: number): Promise<Medico> {
    return await this.medicoRepository.findOne({
      relations: ['especialidades'],
      where: { id: id },
    });
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDto): Promise<Medico> {
    const medico = await this.findOne(id);
    const medicoAt = this.medicoRepository.create(updateMedicoDto);
    const medicoAtualizado: Medico = {
      ...medico,
      ...medicoAt,
    };

    return this.medicoRepository.save(medicoAtualizado);
  }

  async remove(id: number): Promise<void> {
    const medico = await this.findOne(id);
    const enderecoRemovido = await this.enderecoRespoistoy.softDelete(
      medico.endereco.id,
    );
    const especialidade = await Promise.all(
      medico.especialidade.map(
        async (especialidade) =>
          await this.especialidadeRepository.softDelete(especialidade),
      ),
    );
    const medicoRemovido = await this.medicoRepository.softDelete(medico);
    return;
  }
}
