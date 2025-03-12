import { PrismaClient } from '@prisma/client';
import { seedTaxonomy } from './taxonomy.seed';
import { SeedClassfieds } from './classified.seed';
import { seedImages } from './images.seed';

const prisma = new PrismaClient();

async function main() {
  // await prisma.$executeRaw`TRUNCATE TABLE "makes" RESTART IDENTITY CASCADE`;
  // await seedTaxonomy(prisma);
  // await SeedClassfieds(prisma);
  await seedImages(prisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
