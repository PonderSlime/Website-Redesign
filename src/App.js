import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Footer from './components/footer'
import Header from './components/header'
const user = {
  name: 'PonderSlime',
  imageUrl: 'https://avatars.githubusercontent.com/u/174149291?v=4',
  imageSize: 90,
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src='https://cdn.homecrux.com/wp-content/uploads/2024/08/Hobbit-House-at-June-Farms.jpg' alt='hobbit-hole' />
        <Header />
        <div className='about'>
          <Container>
            <Row className='justify-content-md-center'>
              <Col className='about-info'>
                testing stuff in the usual, boring way
              </Col>
              <Col xs lg='2' className='about-img'>
                <img src={user.imageUrl} className="App-logo" alt="logo" />
              </Col>
              
            </Row>
          </Container>
        </div>
        <img src={user.imageUrl} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src='https://media1.tenor.com/m/CWgfFh7ozHkAAAAd/rick-astly-rick-rolled.gif' alt='rickroll' />
        <Footer />
      </header>
    </div>
  );
}

export default App;
