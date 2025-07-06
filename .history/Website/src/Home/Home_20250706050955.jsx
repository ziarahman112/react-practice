import sink from '../assets/sink.jpeg';
import basin from '../assets/bathroom basin.jpeg';
import toilet from '../assets/toilet.jpeg';
import bath from '../assets/bath.jpeg';
// import shower from '../assets/shower.jpeg';
import showerEnclosure from '../assets/Shower enclosure.jpeg';
import Header from '../components/Header';
import sinks from '../sink/sinks';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';




function Home(){
const navigate = useNavigate();

let b = function() {
    navigate('/sinks');
}
    return(
       <header>
            <h1 className= "" > Welcome to Plumbzone</h1>
            

    <div>
        <div className={styles.card}>
            <img className='card-image' src = {basin} alt ="Bathroom Basin"></img>
            <h2 className='card-title'> Bathroom Basins</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {showerEnclosure} alt ="Shower Enclosure"></img>
            <h2 className='card-title'> Shower Enclosuers</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {toilet} alt ="Toilets"></img>
            <h2 className='card-title'> Toilets</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {bath} alt ="BathTubs"></img>
            <h2 className='card-title'> Baths</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Showers</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Bathroom Accessories</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Boilers</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Kitchen Accessories</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

    


        </div>
        </header>
        
    );
}
export default Home;