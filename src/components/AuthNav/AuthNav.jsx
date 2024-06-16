import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"
import { highlightChosenPage } from "../../redux/auth/slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectChosenPage } from "../../redux/auth/selectors";
import { useLocation } from "react-router-dom";

export default function AuthNav() {
  const dispatch = useDispatch()

  const chosenPage = useSelector(selectChosenPage);

  const location = useLocation()
  const redirectedToLoginPage = location.pathname === "/login"

  return (
    <div>
      <NavLink onClick={() => dispatch(highlightChosenPage("Register"))} className={chosenPage === "Register" ? css.highlighted : css.link} to="/registration">
        Register
      </NavLink>
      <NavLink onClick={() => dispatch(highlightChosenPage("Log In"))} className={redirectedToLoginPage || chosenPage === "Log In" ? css.highlighted : css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}