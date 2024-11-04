import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css'

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
    }, [scrollDirection]);

    return scrollDirection;
};

// header component
function Header() {
    const scrollDirection = useScrollDirection();
    
    return (
    <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-blue-200 transition-all duration-500 header`}>
        <div className='nav-logo'>
            <img src='https://avatars.githubusercontent.com/u/174149291?v=4' alt='logo' />
        </div>
        <i class="fa fa-bars fa-3x" />
        <div className='header-links'>
            <ul>
                <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
                <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
                <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
            </ul>
        </div>
    </div>
    );
};

export default Header;