import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const GET = async () => {
  cookies().delete('jsonwebtoken');
  redirect('/');
};
