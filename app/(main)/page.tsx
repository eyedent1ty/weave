import NewThread from '@/components/home/NewThread';
import ListOfPost from '@/components/home/ListOfPost';
import { PrismaClient } from '@prisma/client';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const Home = async () => {
  const token = cookies().get('jsonwebtoken')?.value;

  let user = null;

  if (token) {
    const prisma = new PrismaClient();
    const { username } = verify(token, 'SECRETKEY') as { username: string };

    user = await prisma.user.findFirst({
      where: {
        username: username
      }
    });
  }

  return (
    <>
      <div
        className={`${
          user ? 'flex' : 'hidden'
        } px-6 py-4 justify-between border-b border-border-color`}
      >
        {user ? <NewThread user={user} /> : null}
      </div>
      <ListOfPost />
    </>
  );
};

export default Home;
