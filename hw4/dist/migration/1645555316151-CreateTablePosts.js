"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTablePosts1645555316151 = void 0;
const typeorm_1 = require("typeorm");
class CreateTablePosts1645555316151 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Posts', true);
    }
}
exports.CreateTablePosts1645555316151 = CreateTablePosts1645555316151;
//# sourceMappingURL=1645555316151-CreateTablePosts.js.map