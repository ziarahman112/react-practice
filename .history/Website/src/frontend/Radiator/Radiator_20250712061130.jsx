import styles from './Radiator.module.css';
import towel from '../../assets/towel.avif';
import electric from '../../assets/electricTowel.avif';
import duel from '../../assets/duelfuel.avif';
import designer from '../../assets/designer.avif';
import accessories from '../../assets/radiatorAccessories.avif';
function Radiator(){
    return (
        <header>
            <h1> 
                Radiators
            </h1>
            <div>
                  <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={towel} alt="Towel Rail" /> </a>
                                        <h2>Towel Rails</h2>
                                        <p></p>
                                            </div>

            <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={electric} alt="Electric Towel Rail" /> </a>
                                        <h2>Electric Towel Rails</h2>
                                        <p></p>
                                            </div>



        <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={duel} alt="Duel Fuel Towel Rail" /> </a>
                                        <h2>Duel Fuel Towel Rails</h2>
                                        <p></p>
                                            </div>


        <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={designer} alt="Designer Towel Rail" /> </a>
                                        <h2>Designer Towel Rails</h2>
                                        <p></p>
                                            </div>


        <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={accessories} alt="Towel Rail Accessories" /> </a>
                                        <h2>Towel Rail Accessories</h2>
                                        <p></p>
                                            </div>
                
        
            </div>
        </header>
    )
}
export default Radiator;    