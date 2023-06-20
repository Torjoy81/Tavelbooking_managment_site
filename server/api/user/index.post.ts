import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    await prisma.customer.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        Hashedpassword: body.password,
      },
    });
  } catch (e) {
    console.log(e);
    console.log("Problem prisma");
  }
  return "Data is Created";
});
