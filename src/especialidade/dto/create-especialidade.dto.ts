import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EspecialidadeTypeEnum } from '../entities/especialidade.entity';

export class CreateEspecialidadeDto {
  @IsEnum(EspecialidadeTypeEnum)
  @ApiProperty()
  tipo: EspecialidadeTypeEnum;
}
