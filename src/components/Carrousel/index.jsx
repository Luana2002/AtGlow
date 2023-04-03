import mobile1 from "./../../assets/img/Mobile/banner3-mobile.png";
import tablet1 from "./../../assets/img/Tablet/banner3-tablet.png";
import desktop1 from "./../../assets/img/Desktop/banner3-desktop.png";
import mobile2 from "./../../assets/img/Mobile/banner2-mobile.png";
import tablet2 from "./../../assets/img/Tablet/banner2-tablet.png";
import desktop2 from "./../../assets/img/Desktop/banner2-desktop.png";
import mobile3 from "./../../assets/img/Mobile/banner1-mobile.png";
import tablet3 from "./../../assets/img/Tablet/banner1-tablet.png";
import desktop3 from "./../../assets/img/Desktop/banner1-desktop.png";

export function Carrousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="img-fluid d-md-none"
            src={mobile1}
            alt="modelo Masculino, vestindo blazer cinza com fundo laranja."
          />
          <img
            className="img-fluid d-none d-md-block d-xl-none"
            src={tablet1}
            alt="modelo Masculino, vestindo blazer cinza com fundo laranja."
          />
          <img
            className="img-fluid d-none d-xl-block"
            src={desktop1}
            alt="modelo Masculino, vestindo blazer cinza com fundo laranja."
          />
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid d-md-none"
            src={mobile2}
            alt="modelo Feminino, casaco preto com fundo rosa."
          />
          <img
            className="img-fluid d-none d-md-block d-xl-none"
            src={tablet2}
            alt="modelo Feminino, casaco preto com fundo rosa."
          />
          <img
            className="img-fluid d-none d-xl-block"
            src={desktop2}
            alt="modelo Feminino, casaco preto com fundo rosa."
          />
          <div className="carousel-caption d-md-block">
            <h5 className="fs-1">COLEÇÃO ATEMPORAL 2023</h5>
            <p className="fs-4">
              Com Todo o estilo e glamour que você merece!!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="img-fluid d-md-none"
            src={mobile3}
            alt="modelo Feminino, casaco rosa com fundo lilas."
          />
          <img
            className="img-fluid d-none d-md-block d-xl-none"
            src={tablet3}
            alt="modelo Feminino, casaco rosa com fundo lilas."
          />
          <img
            className="img-fluid d-none d-xl-block"
            src={desktop3}
            alt="modelo Feminino, casaco rosa com fundo lilas."
          />
          <div className="carousel-caption ">
            <h5 className="fs-1">COLEÇÃO ATMEPORAL 2023</h5>
            <p className="fs-4">A elegância é fruto de um excelente estilo</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}
