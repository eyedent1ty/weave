import { SignIn } from '@clerk/nextjs';

export default function AuthPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
