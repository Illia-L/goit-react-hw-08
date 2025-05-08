import { useSelector } from 'react-redux';
import { selectIsLogged, selectIsRefreshing } from '../../redux/auth/selectors';
import { Navigate } from 'react-router';

function RestrictedRoute({ children }) {
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing)

  if(isRefreshing) return null
  
  if (!isLogged) return <>{ children }</>
  
  return <Navigate to='/contacts' />;
}

export default RestrictedRoute;
