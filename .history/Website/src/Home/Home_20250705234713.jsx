import sink from '../assets/sink.jpeg';
import Header from '../Header';
import sinks from '../sinks';
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
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>

        <div className={styles.card}>
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>


        </div>
        </header>
        
    );
}
export default Home;