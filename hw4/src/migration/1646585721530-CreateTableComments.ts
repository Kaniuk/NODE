import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableComments1646585721530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'comments',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },

                {
                    name: 'text',
                    type: 'varchar',
                    width: 255,
                    isNullable: false,
                },

                {
                    name: 'like',
                    type: 'int',
                    isNullable: false,
                    default: 0,
                },

                {
                    name: 'dislike',
                    type: 'int',
                    isNullable: false,
                    default: 0,
                },

                {
                    name: 'authorId',
                    type: 'int',
                },

                {
                    name: 'postId',
                    type: 'int',
                },

                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },

                {
                    name: 'deleteAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],

            foreignKeys: [
                {
                    columnNames: ['authorId'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['postId'],
                    referencedTableName: 'posts',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }
    // authorId, postId,

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments', true);
    }

}