import sink from './assets/sink.jpeg';
function Card(){

    return(
        <div className="card">
            <img className='card-image' src = {sink} alt ="Sinks"></img>
            <h2 className='card-title'> Sinks</h2>
            <p className='card-p'>Find all the sinks in the market ranging from all shapes and sizes click the button to find out more</p>
            <button className='class-button'>Go To</button>
        </div>
    );
}
export default Card;