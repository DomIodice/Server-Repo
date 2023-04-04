/*
  Warnings:

  - You are about to drop the `testFromNode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "testFromNode";

-- CreateTable
CREATE TABLE "author" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);
