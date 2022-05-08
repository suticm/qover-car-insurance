import axios from 'axios';
import { API_URL } from '../constants';
import { setAccessToken } from '../utils';

const authApiUrl = `${API_URL}/v1/auth/login`;

const UserService = {
  login: (email: string, password: string, rememberMe: boolean) =>
    axios
      .post(authApiUrl, {
        email,
        password,
        rememberMe,
      })
      .then((res) => setAccessToken(res.data.accessToken)),
};

export default UserService;
