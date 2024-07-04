'use client';

import { useState, type FC, type FormEvent } from 'react';

import Dialog from '../UI/Dialog';
import Button from '../UI/Button';
import UserInput from './UserInput';
import { useAppSelector } from '@/lib/hooks';

interface NewUserCredentials {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const AuthDialog: FC = () => {
  const isOpen = useAppSelector((state) => state.authDialog.isOpen);
  const [registerTab, setRegisterTab] = useState(false);

  const [newUser, setNewUser] = useState<NewUserCredentials>({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  const handleClickRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(newUser);
  }

  const mainContent = (
    <div className={`pr-6`}>
      {!registerTab ? (
        <>
          <article className="flex items-center gap-4">
            <section className="flex-1">
              <header className="text-3xl mb-4">Sign in</header>
              <form>
                <div className="flex flex-col items-center gap-2">
                  <UserInput id="username" type="text" placeholder="Username" />
                  <UserInput
                    id="password"
                    type="password"
                    placeholder="Password"
                  />

                  <Button className="w-full bg-secondary text-primary py-2">
                    Login
                  </Button>
                </div>
              </form>
            </section>
            <section className="flex-1 mt-auto">
              <h1 className="font-bold text-5xl">Weave</h1>
              <p className="text-lg">
                Connect with friends and the world around you on weave.
              </p>
            </section>
          </article>
          <hr className="mt-5" />
          <p className="text-center mb-5">or</p>
          <div className="text-center">
            <Button
              className="py-2 bg-primary text-secondary border-secondary"
              onClick={() => setRegisterTab(true)}
            >
              Register an account
            </Button>
          </div>
        </>
      ) : (
        <>
          <article className="flex items-center gap-4">
            <section className="flex-1">
              <header className="text-3xl mb-4">Register</header>
              <form className="flex flex-col gap-3" onSubmit={handleClickRegister}>
                <div className="flex gap-2">
                  <UserInput
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={newUser.firstName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, firstName: e.target.value })
                    }
                  />
                  <UserInput
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={newUser.lastName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, lastName: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-2">
                  <UserInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                  />
                  <UserInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                  />
                </div>
                <Button className="w-full bg-secondary text-primary py-2" type="submit">
                  Login
                </Button>
              </form>
            </section>
          </article>
          <hr className="mt-5" />
          <p className="text-center mb-5">or</p>
          <div className="text-center">
            <Button
              className="py-2 bg-primary text-secondary border-secondary"
              onClick={() => setRegisterTab(false)}
            >
              Login instead
            </Button>
          </div>
        </>
      )}
    </div>
  );

  return isOpen && <Dialog mainContent={mainContent} />;
};

export default AuthDialog;
