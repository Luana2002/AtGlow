/* eslint-disable jsx-a11y/anchor-is-valid */
import "./../../styles/section.css";
import camiseta1 from "./../../assets/img/Mobile/produtos/camiseta.png";
import camiseta2 from "./../../assets/img/Tablet/produtos/camiseta.png";
import camiseta3 from "./../../assets/img/Desktop/produtos/camiseta.png";
import bolsa1 from "./../../assets/img/Mobile/produtos/bolsa.png";
import bolsa2 from "./../../assets/img/Tablet/produtos/bolsa.png";
import bolsa3 from "./../../assets/img/Desktop/produtos/bolsa.png";
import calca1 from "./../../assets/img/Mobile/produtos/calca.png";
import calca2 from "./../../assets/img/Tablet/produtos/calca.png";
import calca3 from "./../../assets/img/Desktop/produtos/calca.png";
import jaqueta1 from "./../../assets/img/Mobile/produtos/jaqueta-jeans.png";
import jaqueta2 from "./../../assets/img/Tablet/produtos/jaqueta-jeans.png";
import jaqueta3 from "./../../assets/img/Desktop/produtos/jaqueta-jeans.png";
import oculos1 from "./../../assets/img/Mobile/produtos/oculos.png";
import oculos2 from "./../../assets/img/Tablet/produtos/oculos.png";
import oculos3 from "./../../assets/img/Desktop/produtos/oculos.png";
import tenis1 from "./../../assets/img/Mobile/produtos/tenis.png";
import tenis2 from "./../../assets/img/Tablet/produtos/tenis.png";
import tenis3 from "./../../assets/img/Desktop/produtos/tenis.png";

export function CardItem() {
  return (
    <div className="container row mx-auto">
      <div className="col-12 col-md-6 col-xxl-4 pb-4">
        <div className="card">
          <img
            class="d-block d-md-none"
            src={camiseta1}
            alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo."
          />
          <img
            class="d-none d-md-block d-xl-none"
            src={camiseta2}
            alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo."
          />
          <img
            class="d-none d-xl-block"
            src={camiseta3}
            alt="Modelo masculo vestindo touca preta, blusa marrom e calça jeans, com uma parede cinza de fundo."
          />
          <div className="card-body">
            <h5 className="card-title">Camiseta masculina</h5>
            <p className="card-text">Camisa Modelo Masculina Mostarda</p>
            <p>R$130,00</p>
            <a
              href="#"
              className="btn btn-primary bg-darkRed rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xxl-4 pb-4">
        <div className="card">
          <img class="d-block d-md-none" src={bolsa1} alt="bolsa marrom" />
          <img
            class="d-none d-md-block d-xl-none"
            src={bolsa2}
            alt="bolsa marrom"
          />
          <img class="d-none d-xl-block" src={bolsa3} alt="bolsa marrom" />
          <div className="card-body">
            <h5 className="card-title">Bolsa Nixus</h5>
            <p className="card-text">Bolsa de couro</p>
            <p>R$699,90</p>
            <a
              href="#"
              className="btn btn-primary bg-darkRed rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xxl-4 pb-4">
        <div className="card">
          <img
            class="d-block d-md-none"
            src={calca1}
            alt="calça marrom claro"
          />
          <img
            class="d-none d-md-block d-xl-none"
            src={calca2}
            alt="calça marrom claro"
          />
          <img
            class="d-none d-xl-block"
            src={calca3}
            alt="calça marrom claro"
          />
          <div className="card-body">
            <h5 className="card-title">Calça feminina</h5>
            <p className="card-text">Calça feminina Bege</p>
            <p>R$195,00</p>
            <a
              href="#"
              className="btn btn-primary bg-darkRed rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xxl-4 pb-4">
        <div className="card">
          <img class="d-block d-md-none" src={jaqueta1} alt="jaqueta jeans" />
          <img
            class="d-none d-md-block d-xl-none"
            src={jaqueta2}
            alt="jaqueta jeans"
          />
          <img class="d-none d-xl-block" src={jaqueta3} alt="jaqueta jeans" />
          <div className="card-body">
            <h5 className="card-title">Jaqueta Jeans</h5>
            <p className="card-text">Jaqueta Jeans Azul claro</p>
            <p>R$369,90</p>
            <a
              href="#"
              className="btn btn-primary bg-darkRed rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xxl-4 pb-4">
        <div className="card">
          <img
            class="d-block d-md-none"
            src={oculos1}
            alt="óculos de grau estiloso"
          />
          <img
            class="d-none d-md-block d-xl-none"
            src={oculos2}
            alt="óculos de grau estiloso"
          />
          <img
            class="d-none d-xl-block"
            src={oculos3}
            alt="óculos de grau estiloso"
          />
          <div className="card-body">
            <h5 className="card-title">Óculos Verdara</h5>
            <p className="card-text">Óculos de Armação Verdara</p>
            <p>R$199,90</p>
            <a
              href="#"
              className="btn btn-primary bg-darkRed rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xxl-4 pb-4">
        <div className="card">
          <img
            class="d-block d-md-none"
            src={tenis1}
            alt="tenis branco pisando na água"
          />
          <img
            class="d-none d-md-block d-xl-none"
            src={tenis2}
            alt="tenis branco pisando na água"
          />
          <img
            class="d-none d-xl-block"
            src={tenis3}
            alt="tenis branco pisando na água"
          />
          <div className="card-body">
            <h5 className="card-title">Tenis ZOE</h5>
            <p className="card-text">Tenis modelo branco ZOE</p>
            <p>R$839,90</p>
            <a
              href="#"
              className="btn btn-primary bg-darkRed rounded-0 border-0"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
