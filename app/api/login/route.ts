import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jwt from 'jsonwebtoken';

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();
  const body = await request.json();

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        username: body.username,
        password: body.password
      }
    });

    // Generate the token
    const token = jwt.sign({ username: body.username }, 'SECRETKEY');

    cookies().set('jsonwebtoken', token);

    return NextResponse.json({ message: 'Hello World' });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { success: false, message: 'Not Authenticated' },
      { status: 404 }
    );
  } finally {
    prisma.$disconnect();
  }
};
