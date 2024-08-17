import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <section className="navbar-logo-container">
        <nav>
          <menu>
            <li>
              <NavLink to="/inscription">Inscription</NavLink>
            </li>
            <li>
              <NavLink to="/">Créer un formulaire</NavLink>
            </li>
            <li>
              <NavLink reloadDocument to="/formulaire/all">
                Voir l&apos;ensemble des formulaires
              </NavLink>
            </li>
          </menu>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
