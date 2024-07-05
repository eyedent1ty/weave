import { cookies } from "next/headers";

export const signOut = async () => {
  cookies().delete('jsonwebtoken');
};