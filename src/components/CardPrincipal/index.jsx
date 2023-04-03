import "./../../styles/section.css";
import camiseta1 from "./../../assets/img/Mobile/categorias/categoria-camiseta.png";
import camiseta2 from "./../../assets/img/Tablet/categorias/categoria-camiseta.png";
import camiseta3 from "./../../assets/img/Desktop/categorias/categoria-camiseta.png";
import bolsa1 from "./../../assets/img/Mobile/categorias/categoria-bolsas.png";
import bolsa2 from "./../../assets/img/Tablet/categorias/categoria-bolsas.png";
import bolsa3 from "./../../assets/img/Desktop/categorias/categoria-bolsa.png";
import calcados1 from "./../../assets/img/Mobile/categorias/categoria-calcados.png";
import calcados2 from "./../../assets/img/Tablet/categorias/categoria-calcados.png";
import calcados3 from "./../../assets/img/Desktop/categorias/categoria-calcados.png";
import calcas1 from "./../../assets/img/Mobile/categorias/categoria-calcas.png";
import calcas2 from "./../../assets/img/Tablet/categorias/categoria-calcas.png";
import calcas3 from "./../../assets/img/Desktop/categorias/categoria-calcas.png";
import casacos1 from "./../../assets/img/Mobile/categorias/categoria-casacos.png";
import casacos2 from "./../../assets/img/Tablet/categorias/categoria-casacos.png";
import casacos3 from "./../../assets/img/Desktop/categorias/categoria-casacos.png";
import oculos1 from "./../../assets/img/Mobile/categorias/categoria-oculos.png";
import oculos2 from "./../../assets/img/Tablet/categorias/categoria-oculos.png";
import oculos3 from "./../../assets/img/Desktop/categorias/categoria-oculos.png";

export function CardPrincipal() {
  return (
    <div className="container row mx-auto g-4">
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={camiseta1}
            alt="camiseta masculina de manga verde, com bolso, com detalhe vermelho"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={camiseta2}
            alt="camiseta masculina de manga verde, com bolso, com detalhe vermelho"
          />
          <img
            className="d-none d-xl-block"
            src={camiseta3}
            alt="camiseta masculina de manga verde, com bolso, com detalhe vermelho"
          />
          <div class="card-header bg-darkRed text-light">
            <p class="text-center card-text">Camisetas</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img className="d-md-none d-block" src={bolsa1} alt="bolsa Marrom" />
          <img
            className="d-none d-md-block d-xl-none"
            src={bolsa2}
            alt="bolsa Marrom"
          />
          <img className="d-none d-xl-block" src={bolsa3} alt="Bolsa Marrom" />
          <div class="card-header bg-darkRed text-light">
            <p class="text-center card-text">Bolsas</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={calcados1}
            alt="tenis colorido"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={calcados2}
            alt="tenis colorido"
          />
          <img
            className="d-none d-xl-block"
            src={calcados3}
            alt="tenis colorido"
          />
          <div class="card-header bg-darkRed text-light">
            <p class="text-center card-text">Calçados</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={calcas1}
            alt="pilha de calças azuis"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={calcas2}
            alt="pilha de calças azuis"
          />
          <img
            className="d-none d-xl-block"
            src={calcas3}
            alt="pilha de calças azuis"
          />
          <div class="card-header bg-darkRed text-light">
            <p class="text-center card-text">Calças</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={casacos1}
            alt="casaco marrom"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={casacos2}
            alt="casaco marrom"
          />
          <img
            className="d-none d-xl-block"
            src={casacos3}
            alt="casaco marrom"
          />
          <div class="card-header bg-darkRed text-light">
            <p class="text-center card-text">Casacos</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-xxl-2">
        <div class="card rounded-0 border-0">
          <img
            className="d-md-none d-block"
            src={oculos1}
            alt="oculos de sol"
          />
          <img
            className="d-none d-md-block d-xl-none"
            src={oculos2}
            alt="oculos de sol"
          />
          <img
            className="d-none d-xl-block"
            src={oculos3}
            alt="oculos de sol"
          />
          <div class="card-header bg-darkRed text-light">
            <p class="text-center card-text">Óculos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
