import { useParams } from 'react-router-dom';
import { useProducts } from '../store/ProductContext';
import { useEffect, useState } from 'react';
import { BsCardImage } from "react-icons/bs";
import '../styles/OfferPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserData } from '../store/UserContext';


const OfferPage = () => {

    const navigate = useNavigate();

    // single product state
    const [product, setProduct] = useState([]);
    const [isProductLoaded, setIsProductLoaded] = useState(false);

    // retrieve data from the store
    // const { logingIn } = useUserData();

    const { logingOut, userData, message } = useUserData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        // validation

        if (formData.get('product') == "" && formData.get('weight') == "" && formData.get('description')) {
            alert("Enter Product name, Weight and Description")
            return
        } else {
            alert("Offer Sent Successfully")
            navigate("/");
        }

    }

    const { id } = useParams();
    // console.log(id);

    // fetch assets
    const { loadSingleProduct, products } = useProducts();

    // async
    async function loadLocalData() {
        const data = await loadSingleProduct(id)
        console.log(data)
    }

    // make a request for single item with the ID
    useEffect(() => {
        // loadLocalData();
        loadSingleProduct(id).then(data => {
            console.log(data);
            setProduct(data);
            setIsProductLoaded(true);
        }).catch(err => {
            console.log(err);
            setIsProductLoaded(false);
        })

        // const newProduct = loadSingleProduct(id);
        // console.log(newProduct)
        // setProduct(newProduct);
    }, [isProductLoaded])

    return (
        <section className='offer-page'>

            <div className="buttons">
                <Link to='/' className='form-back-button'>
                    Back to Exchange
                </Link>
                <button className='form-back-button' onClick={() => { logingOut(); navigate("/") }}>
                    Log Out
                </button>
            </div>


            <div className="customer-profile">
                <div className="customer-image">
                    {
                        isProductLoaded ? <img src={product.seller.sellerImage} alt="" className='seller-image' /> : <BsCardImage />
                    }
                </div>
                <div className="personal-info">
                    <p className="name">CEO @ {isProductLoaded ? product.seller.name : null}</p>
                    <p className="location">{isProductLoaded ? product.seller.location : null}</p>
                </div>

                <div className="contact-info">

                </div>
            </div>

            <div className="form-container">
                <div className="form-col">
                    <h2>Your Offer</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name='product' placeholder='Your Product' />
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder='Quantity (Kg)' name='weight' />
                        </div>

                        <div className="form-group">

                            <textarea name="description" placeholder='When harvested and condition of the product'></textarea>
                        </div>

                        <button type='submit'>Send Offer to -  {isProductLoaded ? product.seller.email : null}</button>
                    </form>
                </div>
                <div className="image-col">
                    <img src={isProductLoaded ? product.images : null} alt='' />
                </div>
            </div>
        </section>
    )
}

export default OfferPage