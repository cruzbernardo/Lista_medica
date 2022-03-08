import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty()
  @IsNumberString()
  @MaxLength(8)
  cep: number;

  @ApiProperty()
  @IsString()
  logradouro: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  complemento: string;

  @ApiProperty()
  @IsNumberString()
  numero: number;

  @ApiProperty()
  @IsString()
  bairro: string;

  @ApiProperty()
  @IsString()
  estado: string;
}
