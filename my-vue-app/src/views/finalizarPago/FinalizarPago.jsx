import "../../styles/FinalizarPago.css";
import { Link } from "react-router-dom";

export default function FinalizarPago({ estado }) {
  document.title = "Finalizar Pago";
  return (
    <main className="wrap" onLoad={estado(3)}>
      <div className="titulo-pago">
        <h1>Finalizar compra</h1>
        <form>
          <input
            type="radio"
            className="tarjeta"
            value="1111"
            id="1111"
            checked
          />
          <label for="1111">💳 Mastercard...1111</label>
          <Link to="/carrito/formaPago" className="botones">
            <i className="bi bi-arrow-repeat" />
          </Link>
        </form>
      </div>
      <div className="finalizarpago">
        <section className="envio">
          <h3>Direccion de envio</h3>
          <form className="direccion-envio">
            <div className="fin-nombre-apellidos">
              <input
                type="text"
                className="fin-nombre"
                id="nombre"
                placeholder="👨 Nombre"
              />
              <input
                type="text"
                className="fin-apellidos"
                id="apellidos"
                placeholder="👨 Apellidos"
              />
            </div>
            <div>
              <input
                type="tel"
                className="fin-telefono"
                id="telefono"
                placeholder="☎️ Telefono"
              />
              <input
                type="email"
                className="fin-email"
                id="email"
                placeholder="📧 Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="fin-calle"
                id="calle"
                placeholder="🗺️ Calle"
              />
              <input
                type="number"
                className="fin-numero"
                id="numero"
                placeholder="🗺️ Numero"
              />
            </div>
            <div>
              <select className="fin-provincia" id="provincia">
                <option value="Provincia">---🗺️ Provincia---</option>
                <option value="Malaga">Malaga</option>
                <option value="Madrid">Madrid</option>
                <option value="Sevilla">Sevilla</option>
              </select>
              <input
                type="number"
                className="fin-codigo-postal"
                id="postal"
                placeholder="🗺️ Cp"
              />
            </div>
            <div>
              <select className="fin-pais" id="pais">
                <option value="Pais">--------🗺️ Pais--------</option>
                <option value="españa">España</option>
                <option value="francia">Francia</option>
                <option value="italia">Italia</option>
              </select>
            </div>
            <Link to="##" className="botones-especiales">
              Añadir direccion de envio
            </Link>
          </form>
          <br />
          <span>
            🚚 Envio gratis en este pedido
            <br />
            <small>Por compra mas de 100€</small>
          </span>
          <br />
          <span>
            🎫 4.5€ de descuento en tu sigiente compra
            <br />
            <small>Acumula el 1% de tus compras en descuentos</small>
          </span>
        </section>
        <section className="fin-resumen-pedido">
          <h3>Resumen del pedido</h3>
          <article className="articulo-pedido">
            <div className="fin-articulo">
              <img
                src="https://tenisworldpadel.com/media/catalog/product/cache/271498e157a9c63e918dfed5e4e9cd57/a/d/adidas-metalbone-3.2-2640-1.jpg"
                alt="camiseta"
                width="70px"
              />
              <span>ADIDAS METALBONE 3.1</span>
              <input
                type="number"
                className="numero"
                id="numero"
                placeholder="1"
                min="1"
              />
            </div>
            <span>
              <b>270€</b>
            </span>
          </article>
          <article className="articulo-pedido">
            <div className="fin-articulo">
              <img
                src="https://tenisworldpadel.com/media/catalog/product/cache/271498e157a9c63e918dfed5e4e9cd57/a/d/adidas-metalbone-3.2-2640-1.jpg"
                alt="camiseta"
                width="70px"
              />
              <span>ADIDAS METALBONE 3.1</span>
              <input
                type="number"
                className="numero"
                id="numero"
                placeholder="1"
                min="1"
              />
            </div>
            <span>
              <b>270€</b>
            </span>
          </article>
          <article className="articulo-pedido">
            <div className="fin-articulo">
              <img
                src="https://tenisworldpadel.com/media/catalog/product/cache/271498e157a9c63e918dfed5e4e9cd57/a/d/adidas-metalbone-3.2-2640-1.jpg"
                alt="camiseta"
                width="70px"
              />
              <span>ADIDAS METALBONE 3.1</span>
              <input
                type="number"
                className="numero"
                id="numero"
                placeholder="1"
                min="1"
              />
            </div>
            <span>
              <b>270€</b>
            </span>
          </article>
          <hr />
          <h4>Total 810€</h4>
          <form>
            <Link to="##" className="botones-especiales">
              Pagar con tarjeta online
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
