import showerbath from '../../assets/showerbath.avif';
import slipperbath from '../../assets/Slipper Baths.avif';
import copperbath from '../../assets/Copper Baths.avif';
import doubleended from '../../assets/Double Ended Baths.avif';
import freestanding from '../../assets/Freestanding baths.avif';
import lshape from '../../assets/L Shape Baths.avif';
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

    <p> 
       explore Shower Baths, Freestanding Baths, and more with the click of a button - 
       finding the perfect bath has never been easier. Shop Baths by Type today and upgrade your bath in an instant! 
    </p>

      
<div>
    <h2>Baths By Type</h2>
    <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={showerbath} alt="Shower Bath" /> </a>
    <h2>Shower Baths</h2>
     <p></p>
        </div>

            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={freestanding} alt="Free Standing Baths" /> </a>
    <h2>Freestanding Baths</h2>
     <p></p>
        </div>

            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={corner} alt="Corner Bath" /> </a>
    <h2>Corner Baths</h2>
     <p></p>
        </div>

            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={doubleended} alt="Double Ended Baths" /> </a>
    <h2>Double Ended Baths</h2>
     <p></p>
        </div>


            <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={singleended} alt="Single Ended Baths" /> </a>
    <h2>Single Ended Baths</h2>
     <p></p>
        </div>

                  <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={jshape} alt="J Shape Baths" /> </a>
    <h2>J Shape Baths</h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={lshape} alt="L Shape Shower Baths" /> </a>
    <h2>L Shape Shower Baths </h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={rolltop} alt="Roll Top Baths" /> </a>
    <h2>Roll Top Baths</h2>
     <p></p>
        </div>
        
                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={whirlpool} alt="Whirlpool Baths" /> </a>
    <h2>Whirlpool Baths</h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={slipperbath} alt="Slipper Bath" /> </a>
    <h2>Slipper Baths</h2>
     <p></p>
        </div>

                          <div className = {styles.showerbaths}>
    <a href="/ShowerBath"><img className={styles.bathImage} src={copperbath} alt="Copper Baths" /> </a>
    <h2>Copper Baths</h2>
     <p></p>
        </div>
</div>
</header>
)
}
export default Bath;