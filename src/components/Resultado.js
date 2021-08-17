import React from "react";
import styled from "@emotion/styled";

const ResultadoP = styled.p`
  font-family: "Bebas Neue", cursive;
  color: salmon;
  text-align: left;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Resultado = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <div>
      <ResultadoP>El precio es {resultado.PRICE}</ResultadoP>
      <ResultadoP>
        Última actualizción (english): {resultado.LASTUPDATE}
      </ResultadoP>
      <ResultadoP>
        Variación en las últimas 24h: {resultado.CHANGEPCT24HOUR}
      </ResultadoP>
    </div>
  );
};

export default Resultado;
