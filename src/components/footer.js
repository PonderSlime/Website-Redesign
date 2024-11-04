import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <footer class='footer'>
            <div class='container'>
                <div class='row'>
                    <div class='footer-col'>
                        <h4>Me</h4>
                        <ul>
                            <li><a href='#'>about me</a></li>
                            <li><a href='#'>my services</a></li>
                            <li><a href='#'>privacy policy</a></li>
                            <li><a href='#'>affiliate program</a></li>
                        </ul>
                    </div>
                    <div class='footer-col'>
                        <h4>You</h4>
                        <ul>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>shipping</a></li>
                            <li><a href='#'>returns</a></li>
                            <li><a href='#'>order status</a>
                            </li><li><a href='#'>payment options</a></li>
                        </ul>
                    </div>
                    <div class='footer-col'>
                        <h4>Projects</h4>
                        <ul>
                            <li><a href='https://hackclub.com/'>Hack Club</a></li>
                            <li><a href='https://hacktheseas.org/'>HackTheSeas</a></li>
                            <li><a href='https://ponderslime.github.io/frogpad'>FrogPad</a></li>
                            <li><a href='#'>books</a></li>
                        </ul>
                    </div>
                    <div class='footer-col'>
                        <h4>follow me</h4>
                        <div class='social-links'>
                            <a href='https://github.com/PonderSlime/'>
                                <FontAwesomeIcon icon={fab.faGithub} />
                            </a>
                            <a href='https://ponderslime.itch.io/'>
                                <FontAwesomeIcon icon={fab.faItchIo} />
                            </a>
                            <a href='https://www.figma.com/@PonderSlime'>
                                <FontAwesomeIcon icon={fab.faFigma} />
                            </a>
                            <a href='https://hackclub.com/slack/'>
                                <FontAwesomeIcon icon={fab.faSlack} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;