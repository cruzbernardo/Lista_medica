import { Medico } from '../../medico/entities/medico.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: number;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  estado: string;

  @OneToOne(() => Medico, (medico) => medico.endereco)
  @JoinColumn({
    name: 'medico_id',
    referencedColumnName: 'id',
  })
  medico: Medico;
}
