import { useEffect, useState } from "react";
// import { products } from "../../BBDD";
import Card from "../../component/cards/Card";

export default function Productos({ onClick }) {
  document.title = "Productos";

  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/product/");
      if (response.status === 200) {
        setProducts(await response.json());
        console.log(products);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="wrap">
      <section className="all-cards">
        {products.map(({ id, imagenes, nombre, precio, marca }, index) => (
          <Card
            key={index}
            logo={imagenes[0]}
            Nombre={nombre}
            Precio={precio}
            Marca={marca}
            Id={id}
          />
        ))}
      </section>
    </div>
  );
}
