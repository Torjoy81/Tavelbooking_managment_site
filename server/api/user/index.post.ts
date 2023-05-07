import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  // await prisma.customer.create({
  //     data:{
  //         firstName
  //     }
  // })
  return "Data is Created";
});
