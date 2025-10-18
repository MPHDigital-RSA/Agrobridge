import '../styles/InventoryCard.css';
import { BsCurrencyExchange } from "react-icons/bs";


const InventoryCard = ({ item }) => {
    return (
        <div className='inventory-card'>
            <div className="card-image">
                <img src={item.imageUrl} alt="" />
            </div>

            <div className='card-text'>
                <div className='name-and-quantity'>
                    <p className="tag">{item.name}</p>
                    <p className="quantity">{`${item.quantity}Kg`}</p>
                </div>

                <p className="posted-by">
                    by <span>{item.postedBy}</span>
                </p>

                <button>
                    <BsCurrencyExchange />
                    Exchange
                </button>
            </div>
        </div>
    )
}

export default InventoryCard
