import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className="navbar-class">
        <ul className="navbar-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#tour">Tour</a>
          </li>
          <li>
            <a href="#merch">Merch</a>
          </li> 
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>


      <div className="image-container">
        <img src="Erotomania Album Art Cover.png" id="home"></img>

      </div>

      <div className="About" id="about">
        Rest Ashore is a math rock band in Brooklyn NY.
      </div>

      <div className="Tour" id="tour">
        <div className="image-container">
          <img src="Rest Ashore Japan Tour 9_9.jpg"></img>

        </div>  
        
      </div>
     
      <div className="Merch" id="merch">
     
        
        <div className="image-container">
          
          
          <a href="https://restashore.bandcamp.com/merch">
            
          <img src="tristanHoodie.jpeg"></img>
          </a>
          

        </div>  
        
      </div>

      <div className="Contact" id="contact">
        restashorenj@gmail.com
      </div>

    </div>
  );
}

export default App;
