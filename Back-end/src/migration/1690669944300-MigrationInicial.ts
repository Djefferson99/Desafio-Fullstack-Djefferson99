import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationInicial1690669944300 implements MigrationInterface {
    name = 'MigrationInicial1690669944300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(45) NOT NULL, "email" varchar(45) NOT NULL, "telefone" integer NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(45) NOT NULL, "email" varchar(45) NOT NULL, "telefone" integer NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), "userId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "temporary_contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(45) NOT NULL, "email" varchar(45) NOT NULL, "telefone" integer NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), "userId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contact"("id", "name", "email", "telefone", "createdAt", "userId") SELECT "id", "name", "email", "telefone", "createdAt", "userId" FROM "contact"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`ALTER TABLE "temporary_contact" RENAME TO "contact"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME TO "temporary_contact"`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(45) NOT NULL, "email" varchar(45) NOT NULL, "telefone" integer NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), "userId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "contact"("id", "name", "email", "telefone", "createdAt", "userId") SELECT "id", "name", "email", "telefone", "createdAt", "userId" FROM "temporary_contact"`);
        await queryRunner.query(`DROP TABLE "temporary_contact"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
