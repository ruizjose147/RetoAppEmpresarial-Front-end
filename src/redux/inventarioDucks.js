//constantes 


const HOST_API = "https://app-reto-app-empresarial.herokuapp.com"
const dataInicial = {
    productos : []
}

const OBTENER_PRODUCTOS_EXITO = "OBTENER_PRODUCTOS_EXITO"


//reducer

export default function productosReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_PRODUCTOS_EXITO:
        return{...state, productos: action.payload}

    default: 
        return state
    }
}

//acciones

export const obtenerProductosAccion = () => async (dispatch, getState) => {
    
            try {
                const res = await fetch(HOST_API + "/productos");
                const datos = await res.json    
                dispatch({
                        type: OBTENER_PRODUCTOS_EXITO,
                        payload: datos
                    })
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };