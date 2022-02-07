import { Medico } from 'src/medico/entities/medico.entity';
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
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  estado: string;

  @OneToOne(() => Medico, (medico) => medico.endereco, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  medico: Medico;
}
