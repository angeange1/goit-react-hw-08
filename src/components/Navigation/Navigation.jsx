import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectChosenPage } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"
import { highlightChosenPage } from "../../redux/auth/slice";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch()
  const chosenPage = useSelector(selectChosenPage);

  const location = useLocation()
  const redirectedToHomePage = location.pathname === "/"
  const redirectedToContactsPage = location.pathname === "/contacts"

  return (
    <nav>
      <NavLink onClick={() => dispatch(highlightChosenPage("Home"))}
        className={redirectedToHomePage || chosenPage === "Home" ? css.highlighted : css.link}
        to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink onClick={() => dispatch(highlightChosenPage("Contacts"))}
          className={redirectedToContactsPage || chosenPage === "Contacts" ? css.highlighted : css.link}
          to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}