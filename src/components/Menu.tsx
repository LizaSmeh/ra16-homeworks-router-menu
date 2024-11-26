import cn from "classnames";
import { NavLink } from "react-router-dom";

function Menu() {
  const items = [
    { title: "Главная", to: "/" },
    { title: "Дрифт-такси", to: "/drift" },
    { title: "Time Attack", to: "/timeattack" },
    { title: "Forza Karting", to: "/forza" },
  ];

  return (
    <nav className="menu">
      {items.map(item => (
        <NavLink
          className={({ isActive }) => cn({ "menu__item": true, "menu__item-active": isActive })}
          key={item.to}
          to={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;