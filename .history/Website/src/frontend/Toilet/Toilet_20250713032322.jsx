import styles from './Toilet.module.css';
import coupled from '../../assets/closecoupled.webp';
import backToWall from '../../assets/backToWall.avif';
import wallHung from '../../assets/wallHungToilet.avif';
import comfort from '../../assets/comfortHeightToilet.webp';

function Toilet() {
  return (
    <div >
      <h1>Toilet</h1>
      
      <div className = {styles.toilet}>
                      <a href="/close-coupled"><img className={styles.toiletImage} src={coupled} alt="Close Coupled Toilet" /> </a>
                      <h2>Close Coupled Toilets</h2>
                       <p></p>
                          </div>
      
            <div className = {styles.toilet}>
                      <a href="/back-to-wall"><img className={styles.toiletImage} src={backToWall} alt="Back to Wall Toilet" /> </a>
                      <h2>Back to Wall Toilets</h2>
                       <p></p>      
    </div>

    <div className = {styles.toilet}>
                      <a href="/wall-hung"><img className={styles.toiletImage} src={wallHung} alt="Wall Hung Toilet" /> </a>
                      <h2>Wall Hung Toilets</h2>
                       <p></p>
                          </div>
    
                <div className = {styles.toilet}>
                      <a href="/comfort-height"><img className={styles.toiletImage} src={comfort} alt="Comfort Height Toilet" /> </a>
                      <h2>Comfort Height Toilets</h2>
                       <p></p>      
    </div>
    </div>

  );
}
export default Toilet;