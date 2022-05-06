import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // import dependency
import { getAccessToken } from '../utils';

function ProtectedRoute() {
  const accessToken = getAccessToken();
  if (accessToken) {
    const parsedToken: any = jwtDecode(accessToken);
    if (parsedToken.exp * 1000 < Date.now()) {
      window.localStorage.clear();
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
