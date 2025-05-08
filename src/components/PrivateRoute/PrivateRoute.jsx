import { useSelector } from 'react-redux';
import { selectIsLogged, selectIsRefreshing } from '../../redux/auth/selectors';
import { Navigate } from 'react-router';

function PrivateRoute({ children }) {
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing)

  if(isRefreshing) return null

  if (!isLogged) return <Navigate to='/login' />;

  return <>{children}</>;
}

export default PrivateRoute;
