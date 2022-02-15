import React, { useEffect, useState } from 'react';

const Products = () => {
    const [product, setproduct] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproduct(data))
    } , [])
    return (
        <div>
            <h2>this is from products {product.length}</h2>
        </div>
    );
};

export default Products;