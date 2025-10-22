import '../styles/BigTextButton.css'
import { Link } from 'react-router-dom'

const BigTextButton = ({ buttonText = "button text", buttonUrl = "#" }) => {
    return (
        <Link to={buttonUrl} className='big-text-button'>{buttonText}</Link>
    )
}

export default BigTextButton
