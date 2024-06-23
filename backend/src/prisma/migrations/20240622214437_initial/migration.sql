/*
  Warnings:

  - You are about to drop the column `nome` on the `Plano` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `Plano` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "valor" REAL NOT NULL
);
INSERT INTO "new_Plano" ("id", "valor") SELECT "id", "valor" FROM "Plano";
DROP TABLE "Plano";
ALTER TABLE "new_Plano" RENAME TO "Plano";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
