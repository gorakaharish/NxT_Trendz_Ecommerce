// import { Navigate, Route } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import PropTypes from 'prop-types';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const token = Cookies.get('jwt_token');

//   return token ? <Route {...rest} render={(props) => <Component {...props} />} /> : <Navigate to="/login" />;
// };

// ProtectedRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
  const token = Cookies.get('jwt_token');

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
