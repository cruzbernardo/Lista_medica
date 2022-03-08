import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createEspecialidadesTable1644871529799
  implements MigrationInterface
{
  private readonly tableName = 'Especialidades';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const especialidadesTable = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'tipo',
          type: 'enum',
          enumName: 'especialidades_medicas',
          enum: [
            'Alergologia',
            'Angiologia',
            'BucoMaxilo',
            'CardiologiaClinica',
            'CardiologiaInfantil',
            'CirurgiaCabecaEPescoço',
            'CirurgiaCardiaca',
            'CirurgiaDeTorax',
          ],
        },
        { name: 'medico_id', type: 'int' },
      ],
    });

    const especialidadeMedicaFk = new TableForeignKey({
      columnNames: ['medico_id'],
      referencedTableName: 'Medico',
      referencedColumnNames: ['id'],
      name: 'especialidades_medicas_medico_id_fkey',
    });

    await queryRunner.createTable(especialidadesTable);
    await queryRunner.createForeignKey(this.tableName, especialidadeMedicaFk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
