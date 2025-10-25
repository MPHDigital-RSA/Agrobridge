import '../styles/InventoryCard.css';
import { BsCurrencyExchange } from "react-icons/bs";
import { Link } from 'react-router-dom'


const InventoryCard = ({ item }) => {
    return (
        <div className='inventory-card'>
            <div className="card-image">
                <img src={item.image} alt="" />
            </div>

            <div className='card-text'>
                <div className='name-and-quantity'>
                    <p className="tag">{item.category}</p>
                    <p className="quantity">{`${item.rating.count}Kg`}</p>
                </div>

                <p className="posted-by">
                    by <span>{"Prince"}</span>
                </p>

                <Link className='button' to={`/offer/${item.id}`}>
                    <BsCurrencyExchange />
                    Exchange
                </Link>
            </div>
        </div>
    )
}

export default InventoryCard
