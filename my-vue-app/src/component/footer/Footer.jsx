import Logo from "../logo/Logo";
import "./Footer.css";
import imgFacebbok from "../../imagenes/iconos/media-icon/facebook.png";
import imgInsta from "../../imagenes/iconos/media-icon/insta.png";
import imgTwich from "../../imagenes/iconos/media-icon/twitch.png";
import imgYoutube from "../../imagenes/iconos/media-icon/youtube.png";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="inicio">
        <span>^</span>
      </a>
      <div className="wrap">
        <div className="footer-all">
          <div className="footer-all-menu">
            <div className="logo-footer">
              <Logo />
            </div>
            <div className="menu-footer">
              <div className="submenu1">
                <ul>
                  <li>Centro de ayuda</li>
                  <li>Servicio al consumidor</li>
                  <li>Escribenos</li>
                  <li>Servicio telefonico</li>
                </ul>
              </div>
              <div className="submenu2">
                <ul>
                  <li>
                    <a href="/privacidad">Politica de privacidad</a>
                  </li>
                  <li>Condiciones de compra</li>
                  <li>Opiniones de clientes</li>
                  <li>Aviso de privacidad y cookies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <div className="news">
              <h3>Unete a nuestra newsletter y recibe ofertas diarias</h3>
              <form method="post">
                <div className="input-news">
                  <input
                    type="email"
                    name="email"
                    placeholder="Introduce tu email"
                  />
                  <a href="#" className="botones btn-sub">
                    Suscribirme
                  </a>
                </div>
                <div className="chk-pol">
                  <input
                    type="checkbox"
                    name="aceptar-politicas"
                    id="aceptar-politicas"
                  />
                  <label htmlFor="aceptar-politicas">
                    Acepto las politicas de privacidad de esta web
                  </label>
                </div>
              </form>
            </div>
            <div className="redes">
              <h4>Siguenos en redes</h4>
              <a href="https://es-es.facebook.com/">
                <img src={imgFacebbok} alt="facebook" width="40px" />
              </a>
              <a href="https://www.youtube.com/">
                <img src={imgYoutube} alt="youtube" width="40px" />
              </a>
              <a href="https://www.twitch.tv/">
                <img src={imgTwich} alt="twitch" width="40px" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={imgInsta} alt="insta" width="40px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
