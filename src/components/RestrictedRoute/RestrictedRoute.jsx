import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import { Navigate } from 'react-router';

function RestrictedRoute({ children }) {
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return null;

  if (!isLogged) return <>{children}</>;

  return <Navigate to='/contacts' />;
}

export default RestrictedRoute;
