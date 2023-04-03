export function FormEmail() {
  return (
    <form className="container border border-secondary my-3 my-xl-5 p-3 text-center">
      <h5>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </h5>
      <div className="input-group my-3">
        <input
          type="email"
          className="form-control border-secondary rounded-0"
          placeholder="Digite seu e-mail"
          aria-label="Digite seu e-mail"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
