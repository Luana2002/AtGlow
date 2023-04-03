import "./../../styles/section.css";
export function Section(Props) {
  return (
    <section class="pb-4 bg-darkRed text-light">
      <h2 class="text-center py-3">Conheça todas as nossas facilidades</h2>

      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3">
        <div class="divs-facilidades d-flex align-items-center">
          <div>
            <i class=" bi bi-x-diamond fs-1"></i>
          </div>
          <div>
            <div class="ms-3 mb-1 ">PAGUE PELO PIX</div>
            <div class="texto-menor ms-3">
              Ganhe 5% OFF em pagamentos via PIX
            </div>
          </div>
        </div>

        <div class="divs-facilidades d-flex">
          <div>
            <i class=" bi bi-arrow-repeat fs-1"></i>
          </div>
          <div>
            <div class="ms-3 mb-1 ">TROCA GRÁTIS</div>
            <div class="texto-menor ms-3">
              Fique livre para trocar em até 30 dias.
            </div>
          </div>
        </div>

        <div class="divs-facilidades d-flex">
          <div>
            <i class=" bi bi-flower1 fs-1"></i>
          </div>
          <div>
            <div class="ms-3 mb-1 ">SUSTENTABILIDADE</div>
            <div class="texto-menor ms-3">
              Moda responsável, que respeita o meio ambiente.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
