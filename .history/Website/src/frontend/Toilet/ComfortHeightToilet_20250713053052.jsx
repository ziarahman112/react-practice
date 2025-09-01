import comfort from '../../assets/comfortHeightToilet.webp';
import styles from './Toilet.module.css';
function ComfortHeight () {
    return (
        <header>
            <h1>Comfort Height Toilets</h1>

                           <div className={styles.toilets}>
                                        <p>Explore our selection of comfort height toilets for modern bathrooms.</p>

                                                  <div className={styles.toilet}>
                                                      <img src={comfort} alt="Comfort Height Toilet" />
                                                      <h2>Comfort Height Toilet</h2>
                                                      <p className={styles.rating}>5 ⭐⭐⭐⭐⭐ ratings</p>
                                                      <p>£250</p>
                                                      <p className={styles.inStock}>✅In Stock</p>
                                                  </div>
                                      
                                    </div>
            
        </header>
    )
}
export default ComfortHeight;