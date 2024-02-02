import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function MyWhatsApp({ phoneNumber }) {
return (
<div>
    <div style={{ textAlign: 'center', color: 'green' }}>¡Contáctame en WhatsApp!</div>
    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faWhatsapp} color="green" size="2x" />
    <span style={{ marginLeft: '5px' }}>{phoneNumber}</span>
    </a>
</div>
);
}

export default MyWhatsApp;
