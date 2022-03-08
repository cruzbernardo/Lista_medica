import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMedicosTable1644871509923 implements MigrationInterface {
  private readonly tableName = 'Medico';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const medicosTable = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        { name: 'CRM', type: 'varchar' },
        { name: 'telefone', type: 'varchar' },
        { name: 'celular', type: 'varchar' },
      ],
    });

    await queryRunner.createTable(medicosTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
