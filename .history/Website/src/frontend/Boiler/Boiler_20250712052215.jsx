import combi from '../../assets/combi.avif';
import styles from './Boiler.module.css';

function Boiler() {
  return (
    <div>
      <h1>Boiler Component</h1>
      

      <div className = {styles.boiler}>
                      <a href="/vanity"><img className={styles.tapImage} src={combi} alt="Combi Boiler" /> </a>
                      <h2>Combi Boiler</h2>
                       <p></p>
                          </div>
    </div>
  );
}
export default Boiler;