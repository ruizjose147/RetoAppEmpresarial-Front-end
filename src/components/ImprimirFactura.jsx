import jsPDF from "jspdf"

export const generarPDF = (factura) => {

    let facturaPdf = new jsPDF('p', 'pt')

    facturaPdf.setFontSize(18)
    facturaPdf.text('Raul´s FERRETERIA', 20, 40)
    
    facturaPdf.setFontSize(14)
    facturaPdf.text('FACTURA NUMERO', 20, 80)
    facturaPdf.setFontSize(12)
    facturaPdf.text(`Factura id: ${factura.facturaId}`, 20, 100)
    facturaPdf.text(`Fecha: ${factura.fechaFactura}`, 20, 120)
    facturaPdf.text(`Cliente nombre: ${factura.nombreCliente}`, 20, 140)
    
    facturaPdf.setFontSize(16)
    facturaPdf.text(`PRODUCTOS `, 20, 200)

    facturaPdf.setFontSize(14)
    let ejeY = 220;
    factura.productosVendidos.map((p, i) => {
        ejeY += 20
        facturaPdf.text(`${i+1}. ${p.nombreProducto}  $${p.precioProducto} x ${p.cantidad} `, 40, ejeY)
    })
    facturaPdf.text(`Vendedor: ${factura.nombreVendedor}`, 20, ejeY+20)
    facturaPdf.setFontSize(14)
    facturaPdf.text(`TOTAL:  $${factura.totalFactura}`, 20, ejeY + 60)
    
    facturaPdf.save(`factura_${factura.facturaId}_${factura.fechaFactura}.pdf`)

}