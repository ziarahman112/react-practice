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
    <img  src={showerbath} alt="Shower Bath" />
    <h2>Shower Baths</h2>
     <p>Experience the ultimate relaxation with our luxurious shower baths, designed to provide the perfect blend of comfort and style.</p>
        </div>
        
</div>
</header>
)
}
export default Bath;