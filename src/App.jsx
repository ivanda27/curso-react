import "./App.css";

import Mensaje from "./Mensaje";
const Descripcion = () => {
  return <p> Esta es la app del curso full stack </p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje message="estamos trabjando " />
      <Mensaje message="en un curso" />
      <Mensaje message="de react" />
      <Descripcion />
    </div>
  );
};

export default App;
