import sink from '../../assets/sink.jpeg';
import basin from '../../assets/bathroom basin.jpeg';
import toilet from '../../assets/toilet.jpeg';
import baths from '../../assets/bath.jpeg';
import radiator from '../../assets/radiator.jpeg';
// import shower from '../assets/shower.jpeg';
import boiler from '../../assets/boiler.jpeg';
import taps from '../../assets/tap.jpeg';
import showerEnclosure from '../../assets/Shower enclosure.jpeg';
import Header from '../components/Header';
import sinks from '../sink/sinks';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Bath from '../Bath/Bath';




function Home(){
const navigate = useNavigate();

let b;

let Tap = function() {
    navigate('/taps');
}

let Boiler = function() {
    navigate('/boiler');
}

let bath = function() {
    navigate('/Bath');
}

let sinks = function() {
    navigate('/sinks');
 
}
let shower = function() {
    navigate('/Shower');
}

let Toilet = function() {
    navigate('/toilet');
}

let Radiator = function() {
    navigate('/radiator');
}

    return (
        <header>
            <h1 className={styles.head}>Welcome to Plumbzone Bathrooms</h1>

            <div className={styles.search}>
         <input className = {styles.input}type="text" placeholder='Search for products...' />
         <button className= {styles.Button}> Search </button>
            </div>

      

            <div>
                <h2 className={styles.head}>Shop by Category</h2>

    <div className={styles.card}>
       <a href="/sinks"> <img className="card-image" src={basin} alt="Bathroom Basin" /> </a>
        <h2 className="card-title">Bathroom Basins</h2>
        <p className='card-p'>
            Discover a variety of bathroom basins, including modern and traditional styles in all shapes and sizes to suit your space.
        </p>
        <button className={styles.Button} onClick={sinks}>Go To</button>
    </div>

    <div className={styles.card}>
       <a href="/Shower"> <img className='card-image' src={showerEnclosure} alt="Shower Enclosure" /> </a>
        <h2 className='card-title'>Shower Enclosures</h2>
        <p className='card-p'>
            Browse our collection of stylish and space-saving shower enclosures designed for comfort and practicality.
        </p>
        <button className={styles.Button} onClick={shower}>Go To</button>
    </div>

    <div className={styles.card}>
       <a href="/toilet"> <img className='card-image' src={toilet} alt="Toilets" /> </a>
        <h2 className='card-title'>Toilets</h2>
        <p className='card-p'>
            Choose from a wide selection of toilets, from compact designs to luxury options with advanced flushing systems.
        </p>
        <button className={styles.Button} onClick={Toilet}>Go To</button>
    </div>

    <div className={styles.card}>
      <a href="/Bath"> <img className='card-image' src={baths} alt="BathTubs" /> </a>
        <h2 className='card-title'>Baths</h2>
        <p className='card-p'>
            Relax in our range of bathtubs, from elegant freestanding models to built-in options for all bathroom sizes.
        </p>
        <button className={styles.Button} onClick={bath}>Go To</button>
    </div>

    <div className={styles.card}>
        <a href="/taps"> <img className='card-image' src={taps} alt="Bathroom Taps" /> </a>
        <h2 className='card-title'>Bathroom Taps</h2>
        <p className='card-p'>
            Explore sleek and functional bathroom taps, available in various finishes and styles to match any decor.
        </p>
        <button className={styles.Button} onClick={Tap}>Go To</button>
    </div>

    <div className={styles.card}>
       <a href="/boiler"> <img className='card-image' src={boiler} alt="Boilers" /> </a>
        <h2 className='card-title'>Boilers</h2>
        <p className='card-p'>
            Find energy-efficient boilers perfect for heating your bathroom and providing consistent hot water.
        </p>
        <button className={styles.Button} onClick={Boiler}>Go To</button>
    </div>

    <div className={styles.card}>
       <a href="/radiator"> <img className='card-image' src={radiator} alt="Bathroom Radiators" /> </a>
        <h2 className='card-title'>Bathroom Radiators</h2>
        <p className='card-p'>
            Keep your bathroom warm with stylish radiators designed to complement modern and classic interiors.
        </p>
        <button className={styles.Button} onClick={Radiator}>Go To</button>
    </div>
</div>

        </header>
        
    );
}
export default Home;