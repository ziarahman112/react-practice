import bidet from '../../assets/bidet.webp';
import styles from './Toilet.module.css';
function Bidet () {
    return (
        <header>
            <h1>Bidet Toilets</h1>
            <div className={styles.bidets}>
                <p>Explore our selection of bidet toilets for enhanced hygiene and comfort.</p>

                          <div className={styles.toilet}>
                              <img src={bidet} alt="Bidet Toilet" />
                              <h2>Bidet Toilet</h2>
                              <p className={styles.rating}>5 ⭐⭐⭐⭐⭐ ratings</p>
                              <p>£250</p>
                              <p className={styles.inStock}>✅In Stock</p>
                          </div>
              
            </div>
        </header>
    );
}
export default Bidet;