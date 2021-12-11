import { Outlet } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
import s from './MainLayout.module.scss';


const MainLayout = () => {
    return (
        <div className={s.container}>
            <aside className={s.navWrapper}>
                <NavMenu />
            </aside>

            <main className={s.mainWrapper}>
                <Outlet/>
            </main>

            <aside className={s.asideWrapper}>
                <h1>ASİDE CONTENT</h1>
            </aside>
        </div>
    )
}

export default MainLayout;