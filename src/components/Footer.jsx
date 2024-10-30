import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="mt-auto bg-dark text-white py-3 text-center">
            <div className="container">
                <p>© 2024 Javier Garin, DesafioLatam G76. Todos los derechos reservados.</p>
                <p>
                    Sígueme en 
                    <a 
                        href="https://github.com/JavGarin" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white ms-2"
                        style={{ textDecoration: 'none' }}
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub 🍕
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;