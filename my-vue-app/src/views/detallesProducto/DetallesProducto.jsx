import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselImg from "../../component/carouselImg/CarouselImg";
import ImgGarantia from "../../imagenes/iconos/check.png";
import "../../styles/DetalleProducto.css";

export default function DetallesProductos() {
  document.title = "Detalles de producto";
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(function () {
    async function getProducto() {
      const response = await fetch(`http://localhost:3000/product/${id}`);
      if (response.status === 200) {
        setProducto(await response.json());
        console.log(producto);
      }
    }
    getProducto();
  }, []);

  return (
    <>
      {producto ? (
        <div className="wrap">
          <section className="card-detalle">
            <div className="imagen-carousel">
              <CarouselImg producto={producto} />
            </div>
            <div className="titulo-articulo">
              <h3 id="nombreproducto">{producto.nombre}</h3>
              <p id="descripcioncorta">{producto.descripcioncorta}</p>
              <div className="grupo-precio">
                <span>
                  <b>
                    <i id="precio">{producto.precio}</i>€
                  </b>
                </span>
              </div>
              <div className="add-carrito">
                <input type="number" min="1" name="cantidad" id="cantidad" />
                <a href="#" className="botones-especiales">
                  Añadir al carrito
                </a>
              </div>
              <div className="garantia">
                <img src={ImgGarantia} alt="pago" width="20px" />
                <span>2 años de garantia</span>
              </div>
            </div>
          </section>
          <section className="cracteristicas-opiniones">
            <div className="titulo-caracteristicas">
              <div className="caracteristicas">
                <h3>Características</h3>
              </div>
              <div className="opinones">
                <h3>Opiniones</h3>
              </div>
            </div>
            <div className="descripcion-detalles">
              <div className="descripcion">
                <h3>Descripcion</h3>
                <span id="descripcion">{producto.descripcion}</span>
              </div>
              <div>
                <h4>Detalles</h4>
                <div id="detalles">{producto.detalles}</div>
              </div>
            </div>
          </section>
          <section className="todas-opiniones">
            <div className="opiniones-destacadas">
              <h4>Opiniones destacadas</h4>
              <p>compradores verificados han dejado estas opinones</p>
              <a href="#" className="botones">
                Ver todas las opiniones
              </a>
            </div>
            <div className="algunas-opiniones">
              <p>
                Una Pala impresionante, tiene un manejo y equilibrio perfecto.
              </p>
              <span>Cris | September 22, 2022</span>
              <span> ★★★★★ </span>
            </div>
          </section>
        </div>
      ) : (
        <div className="wrap">...cargando</div>
      )}
    </>
  );
}
