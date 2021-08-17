import React from 'react';
import styled from "@emotion/styled";

const MensajeError = styled.p`
    width: 37%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.3rem;
    background-color:#b7322c;
    font-weight:bold;
`;

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>
            {mensaje}
        </MensajeError>
     );
}
 
export default Error;