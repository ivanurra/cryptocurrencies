import React, { Fragment, useState } from 'react';

const useMoneda = () => {
   
    //State de custom Hook
    const [state, actualizarState] = useState('')

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    // Devuelve state, interfaz y función que modifica el state.
    return [state, Seleccionar, actualizarState];

}
 
export default useMoneda;