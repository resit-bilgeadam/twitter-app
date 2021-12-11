import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actionCreators';
import s from './NavMenu.module.scss';

const NavMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isAuthenticated = useSelector(state => !!state.user);

    const logout = () => {
        dispatch(logoutAction());
        navigate('/auth/login');
    }

    return (
        <nav className={s.navmenu}>
            <div className={s.navItem}>
                <Link className={s.navLink} to='/'>Twitter Logo</Link>
            </div>

            <ul className={s.navList}>
                <li className={s.navItem}>
                    <NavLink className={s.navLink} to='/'>Home</NavLink>
                </li>

                {
                    isAuthenticated ?
                    <li className={s.navItem}>
                        <a 
                            href='#' 
                            className={s.navLink}
                            onClick={logout}>
                            Logout
                        </a>
                    </li> :
                    <>
                        <li className={s.navItem}>
                            <NavLink className={s.navLink} to='/auth/login'>Login</NavLink>
                        </li>

                        <li className={s.navItem}>
                            <NavLink className={s.navLink} to='/auth/register'>Register</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default NavMenu;
