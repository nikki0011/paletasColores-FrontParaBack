import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="grow container mx-auto border-amber-50">
        <h1 className="text-center text-3xl my-3">Lista de Tareas</h1>
        <FormularioTarea></FormularioTarea>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
