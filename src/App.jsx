import { CardItem } from "./components/CardItems/index.jsx";
import { CardPrincipal } from "./components/CardPrincipal/index.jsx";
import { Carrousel } from "./components/Carrousel/index.jsx";
import { Footer } from "./components/Footer/index.jsx";
import { NavBar } from "./components/NavBar/index.jsx";
import { Section } from "./components/Section/index.jsx";
import { FormEmail } from "./components/formInput/index.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <Carrousel />
        <h2 className="text-center my-4 my-xl-5">Busque por Categoria:</h2>
        <CardPrincipal />
        <h2 className=" container text-center my-4 my-lx-5">
          Produtos que estão bombando!
        </h2>
        <CardItem />
        <Section />
        <FormEmail />
      </div>
      <Footer />
    </div>
  );
}

export default App;
