import showerbath from '../../assets/showerbath.avif';
import slipperbath from '../../assets/Slipper Baths.avif';
import copperbath from '../../assets/Copper Bath.avif';
import doubleended from '../../assets/Double Ended Baths.avif';
import freestanding from '../../assets/Freestanding baths.avif';
import lshape from '../../assets/L Shape Shower Baths.avif';
import corner from '../../assets/Corner Baths.avif';
import jshape from '../../assets/J Shape Baths.avif';
import whirlpool from '../../assets/Whirlpool Baths.avif';
import singleended from '../../assets/Single Ended Baths.avif';
import rolltop from '../../assets/Roll Top Baths.avif';    
import styles from './Bath.module.css';

function Bath () {
    return(
<header>
    <h1>
        Baths
    </h1>
      
<div>
    <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={showerbath} alt="Shower Bath" /> </a>
    <h2>Shower Baths</h2>
     <p></p>
        </div>

            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={freestanding} alt="Free Standing Baths" /> </a>
    <h2>Freestanding Baths</h2>
     <p></p>
        </div>

            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={corner} alt="Corner Bath" /> </a>
    <h2>Corner Baths</h2>
     <p></p>
        </div>

            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={doubleended} alt="Double Ended Baths" /> </a>
    <h2>Double Ended Baths</h2>
     <p></p>
        </div>


            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={singleended} alt="Single Ended Baths" /> </a>
    <h2>Single Ended Baths</h2>
     <p></p>
        </div>

                  <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={jshape} alt="J Shape Baths" /> </a>
    <h2>J Shape Baths</h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={lshape} alt="L Shape Shower Baths" /> </a>
    <h2>L Shape Shower Baths </h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={rolltop} alt="Roll Top Baths" /> </a>
    <h2>Roll Top Baths</h2>
     <p></p>
        </div>
        
                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={whirlpool} alt="Whirlpool Baths" /> </a>
    <h2>Whirlpool Baths</h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={slipperbath} alt="Slipper Bath" /> </a>
    <h2>Slipper Baths</h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img src={copperbath} alt="Copper Baths" /> </a>
    <h2>Copper Baths</h2>
     <p></p>
        </div>
</div>
</header>
)
}
export default Bath;