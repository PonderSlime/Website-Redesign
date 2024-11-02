import logo from './logo.svg';
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
        <div className="hero-image">
            <div className="hero-content">
                <img className="hero-img-content" src="https://raw.githubusercontent.com/PonderSlime/ponderslime.github.io/main/images/v2_3602.png" alt="Logo" />
            </div>
        </div>
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <img className="avatar App-logo" src={user.imageUrl} alt="user logo"/>
        <h1 className="username">{user.name}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer />
      </header>
    </div>
  );
}

export default App