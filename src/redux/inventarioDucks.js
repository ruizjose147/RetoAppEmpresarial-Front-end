//constantes 

import axios from "axios";

const HOST_API = "https://app-reto-app-empresarial.herokuapp.com"
const dataInicial = {
    productos : []
}

const request = {
    name: state.name,
    nombreProducto,
    precioProducto,
    cantidad
  };

const OBTENER_PRODUCTOS_EXITO = "OBTENER_PRODUCTOS_EXITO"


//reducer

export default function productosReducer(state = dataInicial, action){
    switch(action.type){

    }
}

//acciones

export const obtenerProductosAccion = () => async (dispatch, getState) => {
    try {
        const consumirApi = async (url) => {
            setLoading(true);
    
            try {
                const res = await fetch(HOST_API + "/productos");
    
                /*if (!res.ok) {
                    return Swal.fire({
                        title: 'Error!',
                        text: 'Personaje no encontrado',
                        icon: 'error',
                    });
                }*/
    
                const datos = await res.json()
                console.log(datos.results)
                //setPersonajes(datos.results);
    
                //setInfo(datos.info);
    
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        
        /*const res = await axios.get(HOST_API + "/productos")
        dispatch({
            type :
        })*/
        
        /*fetch(HOST_API + "/producto", {
            method: "GET",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then*/
    } catch (error) {
        console.log(error)
    }
}