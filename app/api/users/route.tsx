import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Fetching all the users
export const GET = async () => {
  const prisma = new PrismaClient();

  const allUsers = await prisma.user.findMany();

  prisma.$disconnect();

  return NextResponse.json(allUsers);
};

// Creation of new user
export const POST = async (request: Request) => {
  const body = await request.json();

  const prisma = new PrismaClient();

  try {
    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        imageUrl:
          'https://scontent.fmnl16-1.fna.fbcdn.net/v/t1.6435-9/81710879_2493312150907255_6445336796950691840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEBVMYOhIDPGLpk_G94Nq6-iz8rnrCv71aLPyuesK_vVl_K0n6gB0jqQnHGvHUal68ukR1zT8MP5A2iG_KSDzvh&_nc_ohc=XfYE2m5cCAYQ7kNvgEnel5p&_nc_ht=scontent.fmnl16-1.fna&oh=00_AYCbDVOEHLJ7JR18QceX5T3MNfxTefcCAGEgYXQS7UDGuA&oe=66AF02F2',
        bio: '',
        link: '',
        followers: 0,
        createdAt: new Date()
      }
    });

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error })
  } finally {
    prisma.$disconnect();
  }
};
