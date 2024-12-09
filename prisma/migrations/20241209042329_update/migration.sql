/*
  Warnings:

  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BukuTag" DROP CONSTRAINT "BukuTag_tag_id_fkey";

-- DropTable
DROP TABLE "tag";

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BukuTag" ADD CONSTRAINT "BukuTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
