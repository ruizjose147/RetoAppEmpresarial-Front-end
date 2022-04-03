import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAccion } from '../redux/inventarioDucks'

export const Productos = () => {
    const dispatch = useDispatch()

    const productos = useSelector(store => store)
    console.log(productos)

  return (
    <div>
        Lista de Productos
        <button onClick={()=> dispatch(obtenerProductosAccion)}>
            Listar Productos
        </button>
    </div>
  )
}
