import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createEnderecosTable1644870609125 implements MigrationInterface {
  private readonly tableName = 'Endereco';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const addressesTable = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
        },
        { name: 'medico_id', type: 'int' },
        { name: 'cep', type: 'varchar' },
        { name: 'logradouro', type: 'varchar' },
        { name: 'complemento', type: 'varchar', isNullable: true },
        { name: 'numero', type: 'varchar' },
        { name: 'bairro', type: 'varchar' },
        { name: 'estado', type: 'varchar' },
      ],
    });

    await queryRunner.createTable(addressesTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
