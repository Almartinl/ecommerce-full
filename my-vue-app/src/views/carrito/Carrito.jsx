import { Link } from "react-router-dom";
import "../../styles/Carrito.css";

export default function Carrito() {
  document.title = "Carrito";

  return (
    <main className="wrap">
      <section>
        <div className="mi-carrito">
          <h2>Mi carrito</h2>
          <Link to="/productos" className="botones">
            Seguir comprando
          </Link>
        </div>
        <div className="pedido">
          <div className="articulos">
            <article className="articulo-carrito">
              <img
                src="../../src/imagenes/adidasmetalbone3.1.jpg"
                alt="pala adidas"
                width="80px"
              />
              <div className="titulo-articulo-carrito">
                <span>ADIDAS METALBONE 3.1</span>
                <span> 261,00€</span>
              </div>
              <input
                type="number"
                min="1"
                name="cantidad"
                id="cantidad"
                placeholder="Cantidad"
              />
              <button type="button" className="botones-especiales">
                🗑️
              </button>
            </article>
            <article className="articulo-carrito">
              <img
                src="../../src/imagenes/BABOLATAIRVERON.jpg"
                alt="pala babolat"
                width="80px"
              />
              <div className="titulo-articulo-carrito">
                <span>BABOLAT AIR VERON</span>
                <span> 158,35€</span>
              </div>
              <input
                type="number"
                min="1"
                name="cantidad"
                id="cantidad"
                placeholder="Cantidad"
              />
              <button type="button" className="botones-especiales">
                🗑️
              </button>
            </article>
            <article className="articulo-carrito">
              <img
                src="../../src/imagenes/BULLPADELHACK03SPO.jpg"
                alt="pala BULLPADEL"
                width="80px"
              />
              <div className="titulo-articulo-carrito">
                <span>BULLPADEL HACK 03 SPO</span>
                <span> 349,95€</span>
              </div>
              <input
                type="number"
                min="1"
                name="cantidad"
                id="cantidad"
                placeholder="Cantidad"
              />
              <button type="button" className="botones-especiales">
                🗑️
              </button>
            </article>
          </div>
          <br />
          <div className="resumen-pedido">
            <h3>Resumen del pedido</h3>
            <p>
              continua con el proceso de compra asociando tu coinbase wallet o
              pagar con tu tarjeta
            </p>
            <p>209.97€</p>
            <Link to="/carrito/formaPago">
              <button className="botones-especiales" type="button">
                Proceder con el pago
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
