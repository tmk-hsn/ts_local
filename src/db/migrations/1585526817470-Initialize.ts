import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1585526817470 implements MigrationInterface {
    name = 'Initialize1585526817470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `adgroup` (`id` int NOT NULL AUTO_INCREMENT, `campaignId` int NOT NULL, `name` varchar(255) NOT NULL, `status` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `campaign` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `campaign` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `adgroup` ADD CONSTRAINT `FK_3d3ca0d1cbcfeca367879875b5d` FOREIGN KEY (`campaignId`) REFERENCES `campaign`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `adgroup` DROP FOREIGN KEY `FK_3d3ca0d1cbcfeca367879875b5d`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updatedAt`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `createdAt`", undefined);
        await queryRunner.query("ALTER TABLE `campaign` DROP COLUMN `updatedAt`", undefined);
        await queryRunner.query("ALTER TABLE `campaign` DROP COLUMN `createdAt`", undefined);
        await queryRunner.query("DROP TABLE `adgroup`", undefined);
    }

}
