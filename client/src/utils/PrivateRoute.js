import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Component}) => {
    const user = useSelector((state) => state.user)

    return user.isAuth ? <Component /> : <Navigate to="/mon-compte/signup" />
}

export default PrivateRoute
