import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/Products.services';
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    let addProductToCart = (product) => {
        console.log("El producto es: ", product);

        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let productExists = false;
            cart.forEach((item) => {
                if (item._id === product._id) {
                    item.quantity += 1;
                    productExists = true;
                }
            });
            if (!productExists) {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Producto agregado al carrito');
        } else {
            localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
            alert('Producto agregado al carrito');
        }

    }

    useEffect(() => {
        getProduct(id)
            .then((res) => {
                setProducto(res.data.detalle);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);


    return (
        <div className="container p-5">
            <div className="col-12">
                <div className="card mb-4">
                    <img src={producto.imagen} className="card-img-top" alt='test' />

                    <div className="card-body">
                        <h3>${producto.precio}</h3>
                        <h4 className='card-title'>{producto.nombre}</h4>
                        <p className="card-text">{producto.descripcion}</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" onClick={() => addProductToCart(producto)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;