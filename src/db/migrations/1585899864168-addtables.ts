import {MigrationInterface, QueryRunner} from "typeorm";

export class addtables1585899864168 implements MigrationInterface {
    name = 'addtables1585899864168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `creative_part` (`id` int NOT NULL AUTO_INCREMENT, `lead` text NOT NULL, `title` varchar(255) NOT NULL, `maybe_landing_url` varchar(1024) NOT NULL, `force_matching` tinyint NOT NULL, `status` tinyint NOT NULL, `resize_flg` tinyint NOT NULL, `review_status` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `ad` (`id` int NOT NULL AUTO_INCREMENT, `adgroupId` int NOT NULL, `creative_partId` int NOT NULL, `name` varchar(255) NOT NULL, `score_by_category` decimal(5,2) NOT NULL, `title` varchar(16) NOT NULL, `is_archive` tinyint NOT NULL, `status` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `ad` ADD CONSTRAINT `FK_823392f0128442fd69445a88830` FOREIGN KEY (`adgroupId`) REFERENCES `adgroup`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `ad` ADD CONSTRAINT `FK_4642d7b728a4bdca97e99420a05` FOREIGN KEY (`creative_partId`) REFERENCES `creative_part`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ad` DROP FOREIGN KEY `FK_4642d7b728a4bdca97e99420a05`", undefined);
        await queryRunner.query("ALTER TABLE `ad` DROP FOREIGN KEY `FK_823392f0128442fd69445a88830`", undefined);
        await queryRunner.query("DROP TABLE `ad`", undefined);
        await queryRunner.query("DROP TABLE `creative_part`", undefined);
    }

}
