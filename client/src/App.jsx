import axios from "axios";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import "./styles/App.css";
import NavBar from "./components/NavBar";

function App() {
  const [allFormulaire, setAllFormulaire] = useState([]);

  useEffect(() => {
    const findAllFormulaire = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/formulaires`
        );
        setAllFormulaire(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    findAllFormulaire();
  }, []);

  return (
    <section>
      <NavBar />
      <Outlet
        context={{
          allFormulaire,
          setAllFormulaire,
        }}
      />
    </section>
  );
}

export default App;
