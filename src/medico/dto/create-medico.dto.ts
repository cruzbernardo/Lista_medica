import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { checkEspecialidade } from 'src/decorators/checkEspecialidade.decorator';
import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';
import { CreateEspecialidadeDto } from '../../especialidade/dto/create-especialidade.dto';

export class CreateMedicoDto {
  @ApiProperty()
  @IsString()
  @MaxLength(120)
  nome: string;

  @ApiProperty()
  @IsNumberString()
  @MaxLength(7)
  CRM: number;

  @ApiProperty()
  @IsNumberString()
  telefone: number;

  @ApiProperty()
  @IsNumberString()
  celular: number;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  @IsNotEmpty()
  endereco: CreateEnderecoDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateEspecialidadeDto)
  @ArrayMaxSize(2)
  @IsNotEmpty()
  @checkEspecialidade()
  especialidade: CreateEspecialidadeDto[];
}
