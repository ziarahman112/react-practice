import styles from './Toilet.module.css';
import wallhung from '../../assets/wallhung.avif';

function Toilet() {
  return (
    <div className="toilet">
      <h1>Toilet</h1>
      
      <div className = {styles.toilet}>
                      <a href="/vanity"><img className={styles.toiletImage} src={wallhung} alt="Wall Hung Basin" /> </a>
                      <h2>Wall Hung Basins</h2>
                       <p></p>
                          </div>
    </div>
  );
}
export default Toilet;