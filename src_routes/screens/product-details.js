import React from 'react';
import { useParams } from 'react-router-dom';

import prodImg1 from "../assets/prod1.jfif";
import prodImg2 from "../assets/prod2.jfif";
import prodImg3 from "../assets/prod3.jfif";
import prodImg4 from "../assets/prod4.jfif";

const allProducts = {
    1210: {
        id: 1210,
        prodTitle: 'Karvan /APV 7 seater',
        prodImage: prodImg1,
        price: 1800000,
    },
    1211: {
        id: 1211,
        prodTitle: 'Infinix Hot 10s',
        prodImage: prodImg2,
        price: 22500,
    },
    1212: {
        id: 1212,
        prodTitle: 'Khassi Bakra',
        prodImage: prodImg3,
        price: 23000,
    },
    1213: {
        id: 1213,
        prodTitle: 'Iphone 12 Pro Max',
        prodImage: prodImg4,
        price: 25500,
    }
}

function ProductDetails() {
    let { id } = useParams();
    let { prodTitle, prodImage, price } = allProducts[id];

    return (
        <div>
            <img src={prodImage} alt={prodTitle} />
            <h4>{prodTitle}</h4>
            <h6>{price}</h6>
            <p>Lorem Ipsum Dolor Sit Amet.</p>
        </div>
    )
}

export default ProductDetails;