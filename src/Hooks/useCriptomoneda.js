import React, { Fragment, useState } from 'react';
import Label from './useCriptomoneda.styled.js'
import styled from "@emotion/styled";

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    margin-top: 15px;
    border: none;
    font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
   
    //State de custom Hook
    const [state, actualizarState] = useState(stateInicial)

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione moneda--</option>
                {/* {opciones.map(opcion =>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))} */}
            </Select>
        </Fragment>
    );

    // Devuelve state, interfaz y función que modifica el state.
    return [state, SelectCripto, actualizarState];

}
 
export default useCriptomoneda;