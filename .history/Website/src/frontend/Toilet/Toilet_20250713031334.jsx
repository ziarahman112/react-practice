import styles from './Toilet.module.css';
import coupled from '../../assets/closecoupled.webp';

function Toilet() {
  return (
    <div className="toilet">
      <h1>Toilet</h1>
      
      <div className = {styles.toilet}>
                      <a href="/close-coupled"><img className={styles.toiletImage} src={coupled} alt="Close Coupled Toilet" /> </a>
                      <h2>Close Coupled Toilets</h2>
                       <p></p>
                          </div>
    </div>
  );
}
export default Toilet;