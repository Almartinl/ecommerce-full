import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ Id, logo, Nombre, Precio, Marca }) {
  return (
    <div className="wrap articulos">
      <article className="card">
        <Link to={`/detalleProducto/${Id}`}>
          <img src={`http://localhost:3000${logo}`} alt="pala" width="300px" />
        </Link>
        <div className="card-desc">
          <div className="titulo">
            <div className="nombre">
              <span>
                <b>{Nombre}</b>
              </span>
            </div>
            <div className="grupo-precio">
              <div className="numero-precio">
                <span>
                  <b>{Precio}</b>
                </span>
              </div>
              <div className="icono-precio">
                <span>
                  <b>€</b>
                </span>
              </div>
            </div>
          </div>
          <div className="descripcion">
            <p>{Marca}</p>
          </div>
          <div className="rating">
            <span className="filled">★</span>
            <span className="filled">★</span>
            <span className="filled">★</span>
            <span className="filled">★</span>
            <span className="filled-off">★</span>
          </div>
          <div className="btn-card">
            <div className="btn-carrito">
              <Link to="##">
                <span className="botones-especiales">Añadir al carrito</span>
              </Link>
            </div>
            <div className="btn-ver">
              <Link to={`/detalleProducto/${Id}`}>
                <span className="botones">Ver</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
