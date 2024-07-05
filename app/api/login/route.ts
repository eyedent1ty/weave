import { PrismaClient } from '@prisma/client/extension';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  const body = await request.json();

  try {
    const user = await prisma.users.findFirstOrThrow({
      where: {
        username: body.username,
        password: body.password
      }
    });

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
};
