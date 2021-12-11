import { NavLink, Link } from 'react-router-dom';
import s from './NavMenu.module.scss';

const NavMenu = () => {

    return (
        <nav className={s.navmenu}>
            <div className={s.navItem}>
                <Link className={s.navLink} to='/'>Twitter Logo</Link>
            </div>

            <ul className={s.navList}>
                <li className={s.navItem}>
                    <NavLink className={s.navLink} to='/'>Home</NavLink>
                </li>

                <li className={s.navItem}>
                    <NavLink className={s.navLink} to='/auth/login'>Login</NavLink>
                </li>

                <li className={s.navItem}>
                    <NavLink className={s.navLink} to='/auth/register'>Register</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;
