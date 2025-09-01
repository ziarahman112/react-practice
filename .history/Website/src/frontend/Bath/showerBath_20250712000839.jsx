import showerbath from '../../assets/showerbath.avif';
import styles from './Bath.module.css';
function ShowerBath() {
  return (
    <div>
      <h1>Shower Bath</h1>

       <div className={styles.showerbaths}>
        <img src={showerbath} alt="Shower Bath A" />
        <h2>shower bath a</h2>
        <p>£200</p>
        
          </div>

           <div className={styles.showerbaths}>
        <img src={showerbath} alt="Shower Bath B" />
        <h2>shower bath B</h2>
        <p>£200</p>
        
          </div>
  
    </div>
  );
}
export default ShowerBath;