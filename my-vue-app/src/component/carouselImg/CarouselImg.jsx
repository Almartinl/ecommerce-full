export default function CarouselImg({ producto }) {
  const [firstImage, ...rest] = producto.imagenes;
  console.log(producto);
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark  carousel-fade"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          {producto.imagenes === null ? (
            <img src="" className="rounded mx-auto d-block w-75" alt="..." />
          ) : (
            <img
              src={`http://localhost:3000${firstImage}`}
              className="rounded mx-auto d-block w-75"
              alt="..."
            />
          )}
        </div>
        {producto.imagenes === null ? (
          <div className="carousel-item ">
            <img src="" className="rounded mx-auto d-block w-75" alt="..." />
          </div>
        ) : (
          rest.map((item) => (
            <div className="carousel-item ">
              <img
                src={`http://localhost:3000${item}`}
                className="rounded mx-auto d-block w-75"
                alt="..."
              />
            </div>
          ))
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
