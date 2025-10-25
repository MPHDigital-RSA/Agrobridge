import '../styles/BigTextButton.css'
import { Link } from 'react-router-dom'

const BigTextButton = ({ buttonText = "button text", buttonUrl = "#" }) => {
    return (
        <a href={buttonUrl} className='big-text-button'>{buttonText}</a>
    )
}

export default BigTextButton
