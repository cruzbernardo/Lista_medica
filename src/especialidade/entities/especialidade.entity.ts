import { Medico } from '../../medico/entities/medico.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum EspecialidadeTypeEnum {
  Alergologia = 'Alergologia',
  Angiologia = 'Angiologia',
  BucoMaxilo = 'Buco maxilo',
  CardiologiaClinica = 'Cardiologia clínica',
  CardiologiaInfantil = 'Cardiologia infantil',
  CirurgiaCabecaEPescoço = 'Cirurgia cabeça e pescoço',
  CirurgiaCardiaca = 'Cirurgia cardíaca',
  CirurgiaDeTorax = 'Cirurgia de tórax',
}

@Entity()
export class Especialidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: EspecialidadeTypeEnum })
  tipo: EspecialidadeTypeEnum;

  @ManyToOne(() => Medico, (medico) => medico.id, { cascade: true })
  @JoinColumn({
    name: 'medico_id',
    referencedColumnName: 'id',
  })
  medico: Medico;
}
