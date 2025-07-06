import sink from './assets/sink.jpeg';
import sinks from './sinks';


function Card(){


let b = function() {
<a href="sinks"></a>
}
    return(
        <div className="card">
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button' onClick = {b} >Go To  </button>
        </div>
    );
}
export default Card;