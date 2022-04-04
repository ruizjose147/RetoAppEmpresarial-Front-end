import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAccion } from '../redux/inventarioDucks'

export const Productos = () => {
    const dispatch = useDispatch()

    const productos = useSelector(store => store.productos.lista)
    console.log(productos)

    return (
        <div className="row">
            <div className="col-md-6">
                <div>
                    <br />
                    <button
                        onClick={() => dispatch(obtenerProductosAccion())}
                        className="btn btn-md btn-primary btn-block"
                        type="submit"
                    >
                        Productos
                    </button>
                    <ul className="list-group mt-3">
                        {
                            productos.map(item => (
                                <li
                                className="list-group-item" 
                                key={item.idProducto}
                                >
                                   
                                    <button className="btn btn-primary btn-sm float-right">
                                        Agregar 
                                    </button>
                                    {item.nombreProducto}
                                    <p>Precio: ${item.precioProducto}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}
