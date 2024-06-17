import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

export default function AuthNav() {

  const classes = ({ isActive }) => (isActive ? css.highlighted : css.link)

  return (
    <div>
      <NavLink className={classes} to="/registration">
        Register
      </NavLink>
      <NavLink className={classes} to="/login">
        Log In
      </NavLink>
    </div>
  );
}