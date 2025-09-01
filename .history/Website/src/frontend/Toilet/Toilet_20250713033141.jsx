import styles from './Toilet.module.css';
import coupled from '../../assets/closecoupled.webp';
import backToWall from '../../assets/backToWall.avif';
import wallHung from '../../assets/wallHungToilet.avif';
import comfort from '../../assets/comfortHeightToilet.webp';
import low from '../../assets/lowLevelToilet.webp';
import bidet from '../../assets/bidet.webp';
import seat from '../../assets/toiletSeat.avif';
import flush from '../../assets/toiletFlush.avif';

function Toilet() {
  return (
    <div >
      <h1>Toilets</h1>

      <div>
<p>Choose from our wide range of toilets to find the perfect fit for your bathroom.</p>


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
    <div className = {styles.toilet}>
                      <a href="/toilet-flush"><img className={styles.toiletImage} src={flush} alt="Toilet Flush" /> </a>
                      <h2>Toilet Flush</h2>
                       <p></p>

     </div>


     </div>


       </div>
)

}
export default Toilet;