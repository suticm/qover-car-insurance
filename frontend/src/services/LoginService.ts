import axios from 'axios';

const LoginService = {
  login: (email: string, password: string, rememberMe: boolean) =>
    axios
      .post('http://localhost:3000/api/v1/auth/login', {
        email,
        password,
        rememberMe,
      })
      .then((res) =>
        window.localStorage.setItem('user', res.data.access_token),
      ),
};

export default LoginService;
