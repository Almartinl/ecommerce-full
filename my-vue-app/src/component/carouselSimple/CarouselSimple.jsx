import './CarouselSimple.css'

export default function CarouselSimple() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="7000">
     <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="comentarios">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <p className="d-block w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, minima. Suscipit, ipsa obcaecati recusandae quibusdam
              ullam beatae ab dignissimos sunt a, autem animi maxime repellat
              optio necessitatibus alias placeat esse?
            </p>
            <div className="rating">
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
            </div>
        
      </div>
      <div className="carousel-item">
      <p className="d-block w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, minima. Suscipit, ipsa obcaecati recusandae quibusdam
              ullam beatae ab dignissimos sunt a, autem animi maxime repellat
              optio necessitatibus alias placeat esse?
            </p>
            <div className="rating">
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
            </div>
      </div>
      <div className="carousel-item">
      <p className="d-block w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, minima. Suscipit, ipsa obcaecati recusandae quibusdam
              ullam beatae ab dignissimos sunt a, autem animi maxime repellat
              optio necessitatibus alias placeat esse?
            </p>
            <div className="rating">
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
              <span className="filled">★</span>
            </div>
      </div>
    </div>
    </div>
  </div>
  );
}
