import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="/" className="header__logo-link">
          <img
            className="header__logo"
            src="image/logo.svg"
            alt="Логотип Cup Time"
          />
        </NavLink>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Чай
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Кофе
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Чайники
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Турки
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Прочее
              </a>
            </li>
          </ul>
        </nav>

        <NavLink to="cart" className="header__cart-link">
          6
        </NavLink>
      </div>
    </header>
  );
};
