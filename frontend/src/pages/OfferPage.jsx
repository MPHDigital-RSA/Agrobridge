import { useParams } from 'react-router-dom';
import { useProducts } from '../store/ProductContext';
import { useEffect } from 'react';

const OfferPage = () => {

    const { id } = useParams();
    // console.log(id);

    // fetch assets

    const { loadSingleProduct, product, isProductLoaded } = useProducts();

    // make a request for single item with the ID
    useEffect(() => {
        loadSingleProduct(id);
    }, [])

    return (
        <div>
            {product.title}
        </div>
    )
}

export default OfferPage