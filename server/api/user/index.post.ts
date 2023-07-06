import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const HashingPass = await bcrypt.hash(body.password, 10);
  try {
    await prisma.customer.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        Hashedpassword: HashingPass,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return { success: "OK" };
});
