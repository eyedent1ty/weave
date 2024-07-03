import { Icon } from '@iconify/react';
import Button from '../components/UI/Button';

export default function AuthPage() {
  return (
    <div className="h-screen w-sreen flex justify-center items-center">
      <div>
        <header className="text-center">
          <p className="font-semibold text-xl">Log in or sign up in seconds</p>
          <p className="text-sm">
            Use your email or another service to continue with Weave (it's free)
          </p>
        </header>
        <main className="flex flex-col items-center gap-2 mt-3">
          <Button className="w-full max-w-[350px] py-3 relative">
            <Icon
              icon="flat-color-icons:google"
              className="absolute left-[12px] top-0 translate-y-2"
              fontSize={32}
            />
            Continue with Google
          </Button>
          <Button className="w-full max-w-[350px] py-3 relative">
            <Icon
              icon="logos:facebook"
              className="absolute left-[12px] top-0 translate-y-2"
              fontSize={32}
            />
            Continue with Facebook
          </Button>
        </main>
      </div>
    </div>
  );
}
