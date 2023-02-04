import "./Main.css";
import Card from "../cards/Card.jsx";
import { products } from "../../BBDD.jsx";
import Carrusel from "../carrrusel/Carrusel";
import { Link } from "react-router-dom";
import CarouselSimple from "../carouselSimple/CarouselSimple";
import { useState, useEffect } from "react";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/product/");
      if (response.status === 200) {
        const filtro = await response.json();
        setProducts(filtro.slice(0, 4));
        console.log(products);
      }
    }
    getProducts();
  }, []);

  return (
    <main>
      <Carrusel />
      <div className="wrap">
        <div className="all-articulos">
          <div className="all-articulos-text">
            <h2>Articulos de Padel</h2>
            <p>Consigue ahora los mejores articulos en Flash Padel</p>
          </div>
          <Link to="/productos">
            <span className="botones">Ver todos</span>
          </Link>
        </div>
        <section className="all-cards">
          {products.map(
            ({ id, imagenes, nombre, precio, descripcion, marca }) => (
              <Card
                key={id}
                Id={id}
                logo={imagenes[0]}
                Nombre={nombre}
                Precio={precio}
                Descripcion={descripcion}
                Marca={marca}
              />
            )
          )}
        </section>
        <section className="testimonios">
          <div className="testimonio-titulo">
            <h3>Testimonios de clientes</h3>
            <p>Consigue ahora los mejores productos de my store</p>
            <a href="#" className="botones">
              Ver todos
            </a>
          </div>
          <CarouselSimple />
        </section>
      </div>
    </main>
  );
}
