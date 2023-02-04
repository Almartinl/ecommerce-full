import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { ROLES } from "../../../const/roles";
export default function Navbar({ className }) {
  const { logout, authorization, dataToken } = useAuthContext()
  return (
    <nav className="menu">
      <ul className="menu nav1">
        <li>
          <Link to="/productos">
            <span className="btn-nav">Todos los productos</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="btn-nav">Sobre nosotros</span>
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            <span className="btn-nav">Contacto</span>
          </Link>
        </li>
        <li>
          <Link to="/gadgets">
            <span className="btn-nav">Gadgets</span>
          </Link>
        </li>
        <li>
          <Link to="/ofertas">
            <span className="btn-nav">Ofertas</span>
          </Link>
        </li>
      </ul>
      <ul className={className}>
        {dataToken.role === ROLES.Admin ? (<><li>
          <Link to="/admin_view">
            <span className="btn-nav">Administracion</span>
          </Link>
        </li>
          <li>
            <Link to="/pedidos">
              <span className="btn-nav">Mis pedidos</span>
            </Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">
              <span className="btn-nav">Logout</span>
            </Link>
          </li></>) : authorization ? (<><li>
            <Link to="/pedidos">
              <span className="btn-nav">Mis pedidos</span>
            </Link>
          </li>
            <li>
              <Link onClick={logout} to="/login">
                <span className="btn-nav">Logout</span>
              </Link>
            </li></>) : (<li>
              <Link to="/login">
                <span className="btn-nav">Login/Register</span>
              </Link>
            </li>)}

      </ul>
    </nav>
  );
}
