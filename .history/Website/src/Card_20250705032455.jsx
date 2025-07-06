import sink from './assets/sink.jpeg';


function Card(){
const b = document.getElementById("button");

b.onclick = function() {
window.location.href = "https://www.google.com/search?q=sinks&tbm=shop"; // Redirects to Google search for sinks
}
    return(
        <div className="card">
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button id="button" className='class-button'>Go To {b}</button>
        </div>
    );
}
export default Card;