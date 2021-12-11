import { Outlet } from "react-router-dom";
import s from './AuthLayout.module.scss';

const AuthLayout = () => {

    return (
        <div className={s.container}>
            <div className={s.formWrapper}>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;
