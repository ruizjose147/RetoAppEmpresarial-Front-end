import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerFacturasAccion } from '../redux/facturaDucks'
import { generarPDF } from './ImprimirFactura'

export const Factura = () => {
    const dispatch = useDispatch()

    const facturas = useSelector(store => store.factura.listaFacturas)
    console.log(facturas)

    const handlerImprimir = (item) => {
        generarPDF(item);
      };

    return (

        <div className="row">
            <div className="col-md-6">
                <div>
                    <br />
                    <button
                        onClick={() => dispatch(obtenerFacturasAccion())}
                        className="btn btn-md btn-primary btn-block"
                        type="submit"
                    >
                        Facturas
                    </button>
                    <ul className="list-group mt-3">
                        {
                            facturas.map(item => (
                                <li
                                    className="list-group-item"
                                    key={item.facturaId}
                                >
                                    
                                    <p> Comprador: {item.nombreCliente}</p>
                                    <p>Detalle</p>
                                    {item.productosVendidos.map(p =>{
                                         return(
                                            <div>
                                                <p>{p.nombreProducto + ":  $" + p.precioProducto + " Cantidad: " + p.cantidad}</p>
                                            </div>
                                        )
                                    })}   
                                    <p> Total: {item.totalFactura}</p>
                                    <p> Vendedor: {item.nombreVendedor}</p>

                                    <button className="btn btn-primary btn-sm float-right"
                                    onClick={() => handlerImprimir(item)}
                                    >
                                        <i class="fa-solid fa-print"></i>
                                          Imprimir
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}
/*
<li>{item.productosVendidos.nombreProducto}</li>
<li>{item.productosVendidos.precioProducto}</li>
*/