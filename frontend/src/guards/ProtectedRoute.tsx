import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // import dependency

function ProtectedRoute() {
  const accessToken = window.localStorage.getItem('user');
  if (accessToken) {
    const parsedToken: any = jwtDecode(accessToken);
    if (parsedToken.exp * 1000 < Date.now()) {
      window.localStorage.clear();
      console.log('back to login - token not valid');
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
