import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./styles/navBar.css";

const NavBar = () => {
  const router = useRouter();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`nav ${isHidden ? 'hide' : ''}`}>
      <div className="rightLinks">
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Welcome</a>
        </Link>
      </div>

      <div className="leftLinks">
        <Link href="/Products" legacyBehavior>
          <a className={router.pathname === "/Products" ? "active" : ""}>
            Productos
          </a>
        </Link>
        <Link href="/Login" legacyBehavior>
          <a className={router.pathname === "/Login" ? "active" : ""}>
            Iniciar sesión
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
























