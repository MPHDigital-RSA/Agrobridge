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
    // const [product, setProduct] = useState([]);
    // const [isProductLoaded, setIsProductLoaded] = useState(false);

    // retrieve data from the store
    // const { logingIn } = useUserData();

    const { logingOut, userData, message } = useUserData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        // validation

        if (formData.get('email') == "" && formData.get('password') == "") {
            alert("Enter email and password")
            return
        } else if (formData.get('email') == "" && formData.get('password')) {
            alert("Enter email")
            return
        } else if (formData.get('email') && formData.get('password') == "") {
            alert("Enter password")
            return
        }
        else {
            // do a post request here
            // call create products and pass in form values
            // logingIn(formValues);
            // navigate
            navigate("/");
        }

    }

    const { id } = useParams();
    // console.log(id);

    // fetch assets
    const { loadSingleProduct, product } = useProducts();

    // async
    async function loadLocalData() {
        const data = await loadSingleProduct(id)
        console.log(data)
    }

    // make a request for single item with the ID
    useEffect(() => {

        // loadLocalData();
        // loadSingleProduct(id).then(data => {
        //     setProduct(data);
        //     setIsProductLoaded(true);
        //     console.log(data)
        // }).catch(err => {
        //     console.log(err);
        //     setIsProductLoaded(false);
        // })

        // const newProduct = loadSingleProduct(id);
        // console.log(newProduct)
        // setProduct(newProduct);
    }, [])

    return (
        <section className='offer-page'>

            <div className="buttons">
                <Link to='/exchange' className='form-back-button'>
                    Back to Exchange
                </Link>
                <button to='/exchange' className='form-back-button' onClick={() => { logingOut(); navigate("/") }}>
                    Log Out
                </button>
            </div>


            <div className="customer-profile">
                <div className="customer-image">
                    <BsCardImage />
                    {
                        // isProductLoaded ? <p>{product}</p> : <p>Loading..</p>
                    }
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
                            <input type="number" placeholder='Weight (Kg)' name='weight' />
                        </div>

                        <div className="form-group">

                            <textarea name="description" placeholder='Describe your product'></textarea>
                        </div>

                        <button type='submit'>Send Offer to -  {'Prince@gmail.com'}</button>
                    </form>
                </div>
                <div className="image-col">
                    {/* <img src={product.image} alt='' /> */}
                </div>
            </div>
        </section>
    )
}

export default OfferPage