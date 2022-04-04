import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAccion } from '../redux/inventarioDucks'

export const Productos = () => {
    const dispatch = useDispatch()

    const productos = useSelector(store => store.productos.lista)
    console.log(productos)

  return (
    <div>
        <button onClick={()=> dispatch(obtenerProductosAccion())}>
            Listar Productos
        </button>
         <ul>
            {
                productos.map( item => (
                    <li key={item.idProducto}>{item.nombreProducto}</li>
                ))
            }
        </ul>
    </div>
  )
}



