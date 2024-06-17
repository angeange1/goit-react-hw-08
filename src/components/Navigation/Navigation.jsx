import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const classes = ({ isActive }) => (isActive ? css.highlighted : css.link)

  return (
    <nav>
      <NavLink className={classes} to="/">
        Home
      </NavLink>
    {isLoggedIn && (
      <NavLink className={classes} to="/contacts">
        Contacts
      </NavLink>)}
    </nav>
  );
}