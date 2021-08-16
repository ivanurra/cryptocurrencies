import React from "react";
import styled from "@emotion/styled";
import useMoneda from "../Hooks/useMoneda";

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

const Formulario = () => {

  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar Americano' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'USD', nombre: 'Libra Esterlina' }
  ]

  // Utilizamos useMoneda
  const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu moneda', '', MONEDAS);

  return (
    <form>
      <SelectMonedas />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
