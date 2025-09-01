import styles from './Toilet.module.css';
import coupled from '../../assets/closecoupled.webp';
import backToWall from '../../assets/backToWall.avif';
import wallHung from '../../assets/wallHungToilet.avif';
import comfort from '../../assets/comfortHeightToilet.webp';
import low from '../../assets/lowLevelToilet.webp';
import bidet from '../../assets/bidet.webp';
import seat from '../../assets/toiletSeat.avif';

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

    <div className = {styles.toilet}>
                      <a href="/low-level"><img className={styles.toiletImage} src={low} alt="Low Level Toilet" /> </a>
                      <h2>Low Level Toilets</h2>
                       <p></p>
    </div>
    <div className = {styles.toilet}>
                      <a href="/bidet"><img className={styles.toiletImage} src={bidet} alt="Bidet Toilet" /> </a>
                      <h2>Bidet Toilets</h2>
                       <p></p>
    </div>

    <div className = {styles.toilet}>
                      <a href="/toilet-seat"><img className={styles.toiletImage} src={seat} alt="Toilet Seat" /> </a>
                      <h2>Toilet Seats</h2>
                       <p></p>
    </div>

     </div>
)

}
export default Toilet;