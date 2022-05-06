/* eslint-disable react/no-unescaped-entities */
import { FunctionComponent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-white.svg';
import UserService from '../../services/UserService';
import { getAccessToken } from '../../utils';

type LoginInput = {
  email: string;
  password: string;
  rememberMe: boolean;
};

// eslint-disable-next-line react/function-component-definition
export const Login: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<LoginInput>();
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin: SubmitHandler<LoginInput> = (data) => {
    const loginData = data;
    UserService.login(loginData.email, loginData.password, loginData.rememberMe)
      .then(() => {
        setIsUnauthorized(false);
        navigate('/');
      })
      .catch(() => {
        setIsUnauthorized(true);
      });
  };

  return (
    <div className="flex flex-grow sm:py-9">
      <div className="p-5 xs:p-0 mx-auto md:w-full md:max-w-md">
        <img className="mx-auto h-28 my-8" src={logo} alt="Qover" />
        <div className="bg-white login-form">
          <h1 className="text-center pt-5 text-gray-500 text-xl">
            Welcome at Qover
          </h1>
          <div className="text-left px-5 py-7">
            <form onSubmit={handleSubmit(handleLogin)}>
              <label htmlFor="email" className="login-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="login-input"
                required
                {...register('email')}
              />
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="login-input"
                required
                {...register('password')}
              />
              <div className="py-3 grid grid-cols-2 gap-2">
                <div className="rememberMe">
                  <span>
                    <input type="checkbox" {...register('rememberMe')} />
                  </span>
                  <span className="inline-block ml-1">Remember me</span>
                </div>
                <div className="sm:text-right">
                  <div className="py-3 cursor-pointer">
                    <span className="forgotPassword">
                      Forgot your password?
                    </span>
                  </div>
                </div>
              </div>
              {isUnauthorized && (
                <div className="loginErrorMessage">
                  Incorrect email or password
                </div>
              )}
              <button type="submit" className="submitLoginButton ">
                <span className="text-center">Sign in to your account</span>
              </button>
            </form>
          </div>
        </div>
        <div className="py-5 text-center whitespace-nowrap">
          <button className="askForAccessButton">
            <span className="inline-block mx-11">
              Don't have an account
              <u> Ask for access</u>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
