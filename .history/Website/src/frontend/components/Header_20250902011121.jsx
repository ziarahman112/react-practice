


function Header () {

return (
    <div >
    <header id = "header">
    <h1 id = "title" > <a href="/"> Plumbzone Bathrooms</a> </h1>  


                <div >
             <input id= "input" type="text" placeholder='Search for products...' />
             <button id= "Button"> Search </button>
                </div>

    <nav id = "nav">
        <ul id = "nav-list">
            <div><li id = "home"> <a href = "/"> Home</a></li></div>
            <div><li id = "sinks"> <a href="/sinks">Sinks </a></li></div>
            <div><li id="bath"><a href="/bath"> Baths</a></li></div>
            <div><li id="boiler"><a href="/Boiler"> Boilers </a></li></div>
            <div><li id="radiator"><a href="/Radiator"> Radiator </a></li></div>
            <div><li id="shower"><a href="/Shower"> Shower</a></li></div>
            <div><li id="taps"><a href="/taps"> Taps</a></li></div>
            <div><li id="toilet"><a href="/Toilet"> Toilet</a></li></div>

        </ul>
    </nav>


    
    </header>
    </div>
)
}

export default Header;