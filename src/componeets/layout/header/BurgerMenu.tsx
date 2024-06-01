import { FC } from "react";
import scss from "./BurgerMenu.module.scss";

interface linksType {
  name: string;
  href: string;
}
interface BurgerMenuProps {
  links: linksType[];
  isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
