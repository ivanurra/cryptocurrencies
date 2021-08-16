import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {
   
    //State de custom Hook
    const [state, actualizarState] = useState(stateInicial)

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">--Seleccione moneda--</option>
                {opciones.map(opcion =>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    );

    // Devuelve state, interfaz y función que modifica el state.
    return [state, Seleccionar, actualizarState];

}
 
export default useMoneda;