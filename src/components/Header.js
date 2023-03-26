import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return(
        <nav>
            <p className="logo">Patrick Doran //</p>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="https://github.com/Patrick-Doran"><FontAwesomeIcon icon={faGithub} size="2x" inverse/></a>
            <a href="https://www.linkedin.com/in/patrick-doran/"><FontAwesomeIcon icon={faLinkedin} size="2x" inverse/></a>
        </nav>
    );
};

export default Header;