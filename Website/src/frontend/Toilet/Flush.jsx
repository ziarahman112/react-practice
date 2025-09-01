import styles from './Toilet.module.css';
import flush from '../../assets/toiletFlush.avif';
function Flush () {
  return (
    <div>
      <h1>Toilet Flush</h1>
      <p>Explore our selection of toilet flush systems designed for efficiency and style.</p>
 
    <div className={styles.toilets}>
                                         <p>Explore our selection of comfort height toilets for modern bathrooms.</p>
 
                                                   <div className={styles.toilet}>
                                                       <img src={flush} alt="Flush Toilet" />
                                                       <h2>Flush Toilet</h2>
                                                       <p className={styles.rating}>5 ⭐⭐⭐⭐⭐ ratings</p>
                                                       <p>£250</p>
                                                       <p className={styles.inStock}>✅In Stock</p>
                                                   </div>
                                       
                                     </div>
     

    </div>
  );
}
export default Flush;