import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();
  const body = await request.json();

  if (body.token) {
    const decoded = (jwt.verify(body.token, process.env.JWT_SECRET!)) as { username: string; iat: number };

    const user = await prisma.user.findFirst({
      where: {
        username: decoded.username
      }
    });

    prisma.$disconnect();

    return NextResponse.json(
      { user, message: 'Authenticated', success: true },
      { status: 200 }
    );
  }

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        username: body.username,
        password: body.password
      }
    });

    // Generate the token
    const token = jwt.sign(
      { username: body.username },
      process.env.JWT_SECRET!
    );

    return NextResponse.json(
      { user, token, message: 'Authenticated', success: true },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: e }, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
};
