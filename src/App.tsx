import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioColor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="grow container mx-auto border-amber-50">
        <FormularioTarea></FormularioTarea>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
