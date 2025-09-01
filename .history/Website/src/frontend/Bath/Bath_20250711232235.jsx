import showerbath from '../../assets/showerbath.avif';
import styles from './Bath.module.css';

function Bath () {
    return(
<header>
    <h1>
        Baths
    </h1>
      
<div>
    <div className = {styles.showerbaths}>
    <a href="#"><img src={showerbath} alt="Shower Bath" /> </a>
    <h2>Shower Baths</h2>
     <p></p>
        </div>
        
</div>
</header>
)
}
export default Bath;