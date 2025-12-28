import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
function Header(){
    return (
        <nav className={classes.nav}>
            <NavLink to="/" end className={classes.link}>
                Songs
            </NavLink>
            <NavLink to="/favorites" end className={classes.link}>
                Favorites
            </NavLink>
        </nav>
    )
}

export default Header;