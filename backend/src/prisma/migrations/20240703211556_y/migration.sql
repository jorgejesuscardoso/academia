/*
  Warnings:

  - You are about to drop the column `dataFim` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `dataInicio` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Lembrete` table. All the data in the column will be lost.
  - Added the required column `conteudo` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `Lembrete` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "imagem" TEXT,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Evento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Evento" ("createdAt", "id", "tipo", "titulo", "updatedAt", "usuarioId") SELECT "createdAt", "id", "tipo", "titulo", "updatedAt", "usuarioId" FROM "Evento";
DROP TABLE "Evento";
ALTER TABLE "new_Evento" RENAME TO "Evento";
CREATE TABLE "new_Lembrete" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "conteudo" TEXT NOT NULL,
    "concluido" BOOLEAN NOT NULL,
    "imagem" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Lembrete_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Lembrete" ("concluido", "createdAt", "data", "id", "tipo", "titulo", "updatedAt", "usuarioId") SELECT "concluido", "createdAt", "data", "id", "tipo", "titulo", "updatedAt", "usuarioId" FROM "Lembrete";
DROP TABLE "Lembrete";
ALTER TABLE "new_Lembrete" RENAME TO "Lembrete";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
