//constantes 


const HOST_API = "https://app-reto-appempresarial.herokuapp.com"
const dataInicial = {
    lista: []
}

const OBTENER_PRODUCTOS_EXITO = "OBTENER_PRODUCTOS_EXITO"


//reducer

export default function productosReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_PRODUCTOS_EXITO:
        return{...state, lista: action.payload}

    default: 
        return state
    }
}

//acciones

export const obtenerProductosAccion = () => async (dispatch, getState) => {
    //http://localhost:8080/   https://app-reto-appempresarial.herokuapp.com/productos
            try {
                const res = await fetch("http://localhost:8080/producto/productos");
                const datos = await res.json()   
                dispatch({
                        type: OBTENER_PRODUCTOS_EXITO,
                        payload: datos
                    })
            } catch (error) {
                console.log(error)
            } finally {
                //setLoading(false);
            }
        };