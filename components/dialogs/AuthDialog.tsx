'use client';

import { useState, useEffect, type FC, type FormEvent } from 'react';

import Dialog from '../UI/Dialog';
import Button from '../UI/Button';
import UserInput from './UserInput';

import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { fetchAllUsers, setCurrentUser } from '@/lib/features/users/usersSlice';
import { closeAuthDialog } from '@/lib/features/authDialog/authDialogSlice';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';

interface NewUserCredentials {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const AuthDialog: FC = () => {
  const isOpen = useAppSelector((state) => state.authDialog.isOpen);
  const usersSlice = useAppSelector((state) => state.users);
  const [isUsernameAlreadyExist, setIsUsernameAlreadyExist] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const dispatch = useAppDispatch();
  const [registerTab, setRegisterTab] = useState(false);

  const [existingUser, setExistingUser] = useState<{
    username: string;
    password: string;
  }>({ username: '', password: '' });

  const [newUser, setNewUser] = useState<NewUserCredentials>({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    setExistingUser({ username: '', password: '' });
    setNewUser({ firstName: '', lastName: '', username: '', password: '' });
    setIsUsernameAlreadyExist(false);
  }, [registerTab]);

  const handleClickRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      const loggedInUser = await response.json();

      dispatch(setCurrentUser(loggedInUser));
      dispatch(closeAuthDialog());
      dispatch(closeBackdrop());
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(existingUser)
      });

      if (!response.ok) {
        throw new Error('User does not exist');
      }

      const loggedInUser = await response.json();

      dispatch(closeAuthDialog());
      dispatch(closeBackdrop());
      dispatch(setCurrentUser(loggedInUser));

      setIsInvalidCredentials(false);
    } catch (e) {
      console.log(e);
      setIsInvalidCredentials(true);
    }
  };

  const mainContent = (
    <div className={`pr-6`}>
      {!registerTab ? (
        <>
          <article className="flex items-center gap-4">
            <section className="flex-1">
              <header className="text-3xl mb-4">Sign in</header>
              <form onSubmit={handleClickLogin}>
                <p className={`${isInvalidCredentials ? 'opacity-1' : 'opacity-0'} font-medium text-red-400 text-sm transition-all ease-in duration-200`}>Invalid Credentials!</p>
                <div className="flex flex-col items-center gap-2">
                  <UserInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={existingUser.username}
                    onChange={(e) =>
                      setExistingUser((prev) => ({ ...prev, username: e.target.value }))
                    }
                    required
                  />
                  <UserInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={existingUser.password}
                    onChange={(e) =>
                      setExistingUser((prev) => ({
                        ...prev,
                        password: e.target.value
                      }))
                    }
                    required
                  />

                  <Button
                    className="w-full bg-secondary text-primary py-2"
                    type="submit"
                  >
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
              <form
                className="flex flex-col gap-3"
                onSubmit={handleClickRegister}
              >
                <div className="flex gap-2">
                  <UserInput
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={newUser.firstName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, firstName: e.target.value })
                    }
                    required
                  />
                  <UserInput
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={newUser.lastName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, lastName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <UserInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={(e) => {
                      setNewUser((prev) => {
                        const isUsersExist = usersSlice.users.find(
                          (user) => user.username === e.target.value
                        );

                        if (isUsersExist) {
                          setIsUsernameAlreadyExist(true);
                        } else {
                          setIsUsernameAlreadyExist(false);
                        }

                        return { ...prev, username: e.target.value };
                      });
                    }}
                    required
                  />
                  <UserInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative">
                  <p
                    className={`${
                      !isUsernameAlreadyExist ? 'opacity-0' : 'opacity-1'
                    } absolute font-medium text-sm text-red-400 top-0 -translate-y-3/4 transition-all ease-in duration-200`}
                  >
                    Username already exists!
                  </p>
                  <Button
                    className="w-full bg-secondary text-primary py-2 mt-3"
                    type="submit"
                    disabled={isUsernameAlreadyExist}
                  >
                    Register
                  </Button>
                </div>
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
