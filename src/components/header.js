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
        <Container className='p-5 font-bold'>
            <Row>
                <Col className="IIIcol">
                    <a href='index.html'>Home</a>
                </Col>
                <Col className="IIIcol">
                    <a href='#news'>News</a>
                </Col>
                <Col className="IIIcol">
                    <a href='#contact'>Contact</a>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Header;