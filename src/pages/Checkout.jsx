import { useEffect, useState } from "react";
// const products = [1, 2, 3, 4, 5]



const Checkout = () => {

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);



    useEffect(() => {
        document.title = 'Checkout';
        setProducts(
            [
                {
                    _id: "647007949e336649a82ae06c",
                    nombre: "Caffe Mocha",
                    precio: 58.99,
                    descripcion: "Descripción del producto 2",
                    imagen: "https://picsum.photos/seed/2/500/300",
                    stock: 17,
                    quantity: 1
                }
            ]
        );
    }, []);

    const eliminarProducto = () => {

    }



    return (
        <div className="container-pages">
            <div className="p-4">
            <div className="row">
                <div className="col-md-5">
                    {products.length === 0 && <div className="alert alert-warning">No hay productos en el carrito</div>}
                    {products.map((product) => {
                        return (
                            <div className="card mb-3" key={product._id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.imagen} className="img-fluid rounded-start h-100" alt="test" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.nombre}</h5>
                                            <p className="card-text">{product.descripcion}</p>
                                            <h5 style={{ color: "black" }}>${product.precio}</h5>
                                            <p className="card-text"><small className="text-muted">Cantidad: {product.quantity}</small></p>
                                            <div className="text-start">
                                                <button className="btn btn-danger btn-sm" type="button" onClick={() => eliminarProducto(product._id)}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {
                    products.length !== 0 &&
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resumen de compra</h5>
                                <p className="card-text">Tenemos envios gratuitos, aprovecha y compra nuestros productos.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Subtotal <b> {total} USD</b></p>
                                        <p>Envio <b> 0.00</b></p>
                                        <p>Total <b> {total} USD</b></p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    {/* algun boton de checkout */}
                                </div>
                            </div>
                        </div>

                    </div>
                }

            </div>

        </div>
        </div>

    );
}

export default Checkout;