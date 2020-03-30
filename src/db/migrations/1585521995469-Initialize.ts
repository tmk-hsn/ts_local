import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1585521995469 implements MigrationInterface {
    name = 'Initialize1585521995469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `campaign` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `status` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `campaign`", undefined);
    }

}
