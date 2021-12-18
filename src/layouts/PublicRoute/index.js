import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({children}) => {
    const isAuthenticated = useSelector(state => !!state.auth.user);

    if (isAuthenticated) {
        return <Navigate to='/' replace={true} />
    }

    return children;
}

export default AuthenticatedRoute;
