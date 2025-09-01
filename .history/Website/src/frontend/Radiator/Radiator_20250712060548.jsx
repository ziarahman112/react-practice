import styles from './Radiator.module.css';
import combi from '../../assets/combi.avif';
function Radiator(){
    return (
        <header>
            <h1> 
                Radiators
            </h1>
            <div>
                  <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={combi} alt="Combi Boiler" /> </a>
                                        <h2>Towel Rails</h2>
                                        <p></p>
                                            </div>

            <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={combi} alt="Combi Boiler" /> </a>
                                        <h2>Electric Towel Rails</h2>
                                        <p></p>
                                            </div>



        <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={combi} alt="Combi Boiler" /> </a>
                                        <h2>Duel Fuel Towel Rails</h2>
                                        <p></p>
                                            </div>


        <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={combi} alt="Combi Boiler" /> </a>
                                        <h2>Designer Towel Rails</h2>
                                        <p></p>
                                            </div>


        <div className = {styles.radiator}>
                                        <a href="/vanity"><img className={styles.radiatorImage} src={combi} alt="Combi Boiler" /> </a>
                                        <h2>Towel Rail Accessories</h2>
                                        <p></p>
                                            </div>
                
        
            </div>
        </header>
    )
}
export default Radiator;    