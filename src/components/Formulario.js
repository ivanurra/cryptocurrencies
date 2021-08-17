import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../Hooks/useMoneda";
import useCriptomoneda from "../Hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe
    border: none;
    width: 100%;
    border-radius: 10px;
    color: black;
    transition: background-color .3s ease;
    
    &:hover {
        background-color: lightgreen;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {
  // State del listado de criptomonedas

  const [listacripto, guardarCriptomonedas] = useState([]);

  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Americano" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "USD", nombre: "Libra Esterlina" },
  ];

  // Utilizamos useMoneda
  const [moneda, SelectMonedas, actualizarState] = useMoneda(
    "Elige tu moneda",
    "",
    MONEDAS
  );

  // Utilizamos useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige criptomoneda",
    "",
    listacripto
  );

  // Ejecutar la llamada a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // Cuando se pulsa en el botón cotizar
  const cotiizarMoneda = (e) => {
    e.preventDefault();

    // Validad si ambos campos están seleccionados
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }

    // enviamos los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotiizarMoneda}>
      {error ? <Error mensaje="Debes seleccionar todos los campos" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
