import { Endereco } from '../../endereco/entities/endereco.entity';
import { Especialidade } from '../../especialidade/entities/especialidade.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  CRM: number;

  @Column()
  telefone: number;

  @Column()
  celular: number;

  @OneToOne(() => Endereco, (endereco) => endereco.medico)
  endereco: Endereco;

  @OneToMany(() => Especialidade, (especialidade) => especialidade.medico, {
    nullable: false,
  })
  especialidade: Especialidade[];
}
