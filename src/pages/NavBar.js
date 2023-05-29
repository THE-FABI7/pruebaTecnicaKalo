import Link from "next/link";
import { useRouter } from "next/router";
import style from "./styles/navBar.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="nav">
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

export default Navbar;
