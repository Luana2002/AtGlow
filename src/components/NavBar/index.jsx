/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./../../assets/img/logo.png";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1 className="m-0">
            <img
              className="d-block"
              style={{ width: "12rem" }}
              src={logo}
              alt="logo"
            />
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lojas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Novidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promoções
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquise o Produto"
              aria-label="Pesquisar"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
