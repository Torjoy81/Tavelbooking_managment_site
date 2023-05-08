import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const hashing = await argon2.hash(body.password);

  await prisma.customer.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      Hashedpassword: hashing,
    },
  });
  return "Data is Created";
});
