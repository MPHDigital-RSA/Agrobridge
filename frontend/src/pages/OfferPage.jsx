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
        <section className=''>
            <img src={product.image} alt="" />
        </section>
    )
}

export default OfferPage