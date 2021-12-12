import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({children}) => {
    const isAuthenticated = useSelector(state => !!state.user);

    if (!isAuthenticated) {
        return <Navigate to='/auth/login' replace={true} />
    }

    return children;
}

export default AuthenticatedRoute;
