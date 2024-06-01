import scss from "./Header.module.scss";
import logo from "../../../assets/Logo.svg";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";

const links = [
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Developers",
    href: "/",
  },
  {
    name: "Company",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
];
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBesize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleBesize);
    handleBesize();
    return () => {
      window.addEventListener("resize", handleBesize);
    };
  }, []);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>
          {isMobile ? (
            <>
              <button onClick={() => setIsOpen(!isOpen)}>Burger</button>
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <nav className={scss.nav}>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={scss.buttons}>
                <button style={{ background: "none" }}>Support</button>
                <button>Sing in</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
