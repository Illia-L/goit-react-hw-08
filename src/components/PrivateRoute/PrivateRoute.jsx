import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import { Navigate } from 'react-router';

function PrivateRoute({ children }) {
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing)

  if(isRefreshing) return null

  if (!isLogged) return <Navigate to='/login' />;

  return <>{children}</>;
}

export default PrivateRoute;
