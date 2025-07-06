import sink from './assets/sink.jpeg';
import Header from './Header';
import sinks from './sinks';
import { useNavigate } from 'react-router-dom';



function Card(){
const navigate = useNavigate();

let b = function() {
    navigate('/sinks');
}
    return(
       <header>
            <h1>Plumbzone</h1>
            
                
            
        <div className="card">
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
           
        </div>
        </header>
        
    );
}
export default Card;