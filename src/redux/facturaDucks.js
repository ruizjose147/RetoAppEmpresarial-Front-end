//constantes 

const dataInicial = {
    listaFacturas: []
}

const OBTENER_FACTURAS_EXITO = "OBTENER_FACTURAS_EXITO"


//reducer

export default function facturaReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_FACTURAS_EXITO:
        return{...state, listaFacturas: action.payload}

    default: 
        return state
    }
}

//acciones

export const obtenerFacturasAccion = () => async (dispatch) => {
            try {
                const res = await fetch("http://localhost:8080/facturas");
                const datos = await res.json()   
                dispatch({
                        type: OBTENER_FACTURAS_EXITO,
                        payload: datos
                    })
            } catch (error) {
                console.log(error)
            } finally {
                //setLoading(false);
            }
        };