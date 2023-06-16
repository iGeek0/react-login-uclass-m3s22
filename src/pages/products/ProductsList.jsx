import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";





const ProductList = () => {

    const [products, setProducts] = useState([
        {
            _id: 1,
            name: 'Producto 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            price: 100,
            image: 'https://picsum.photos/200/300'
        },
        {
            _id: 2,
            name: 'Producto 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            price: 200,
            image: 'https://picsum.photos/200/300'
        },
    ]);

    useEffect(() => {

    }, []);



    let addProductToCart = (product) => {

    }


    return (
        <main>

            <div className="mt-5 p-5">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            {products.map((product) => {
                                return (
                                    <div className="col-sm-6 col-md-4" key={product._id}>
                                        <div className="card mb-4">
                                            <img src={product.image} className="card-img-top" alt='test' />

                                            <div className="card-body">
                                                <h3>${product.price}</h3>
                                                <h4 className='card-title'>{product.name}</h4>
                                                <p className="card-text">{product.description}</p>

                                                <div className="d-grid gap-2">
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => addProductToCart(product)}>Agregar al carrito</button>
                                                    <Link to={`/detail-product/${product._id}`} className="btn btn-warning btn-sm">Detalle</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>



        </main>
    );
}

export default ProductList;