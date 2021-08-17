import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../Hooks/useMoneda";
import useCriptomoneda from "../Hooks/useCriptomoneda";
import axios from "axios";

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

  // State del listado de criptomonedas

  const [ listacripto, guardarCriptomonedas ] = useState([]);

  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar Americano' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'USD', nombre: 'Libra Esterlina' }
  ]

  // Utilizamos useMoneda
  const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu moneda', '', MONEDAS);

  // Utilizamos useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda('Elige criptomoneda', '', listacripto);

  // Ejecutar la llamada a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data);
    }
    consultarAPI();
  }, []);

  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
