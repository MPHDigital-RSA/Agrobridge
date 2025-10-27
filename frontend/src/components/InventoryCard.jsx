import '../styles/InventoryCard.css';
import { BsCurrencyExchange } from "react-icons/bs";
import { Link } from 'react-router-dom'

// import is user logged in function
import { isUserLogged } from '../utilities/sessionStorage';

const InventoryCard = ({ item }) => {

    return (

        <div className='inventory-card'>
            <div className="card-image">
                <img src={item.images} alt="" />
            </div>

            <div className='card-text'>
                <div className='name-and-quantity'>
                    <p className="tag">{item.title}</p>
                    <p className="quantity">{`${item.weight}Kg`}</p>
                </div>

                <p className="posted-by">
                    by <span>{item.seller.name}</span>
                </p>

                <Link className='button' to={isUserLogged() ? `/offer/${item._id}` : `/`}>
                    <BsCurrencyExchange />
                    Exchange
                </Link>
            </div>
        </div>
    )
}

export default InventoryCard
