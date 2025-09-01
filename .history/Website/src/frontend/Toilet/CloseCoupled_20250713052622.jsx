import coupled from '../../assets/closecoupled.webp';
import styles from './Toilet.module.css';
function CloseCoupled () {

    return (
        <header>
            <h1>Close Coupled Toilets</h1>

                <div className={styles.toilets}>
                            <p>Explore our selection of close coupled toilets for modern bathrooms.</p>

                                      <div className={styles.toilet}>
                                          <img src={coupled} alt="Close Coupled Toilet" />
                                          <h2>Close Coupled Toilet</h2>
                                          <p className={styles.rating}>5 ⭐⭐⭐⭐⭐ ratings</p>
                                          <p>£250</p>
                                          <p className={styles.inStock}>✅In Stock</p>
                                      </div>
                          
                        </div>
        </header>
    )
}
export default CloseCoupled;