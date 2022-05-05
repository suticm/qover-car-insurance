import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  return window.localStorage.getItem('user') ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
