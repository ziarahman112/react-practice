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
                                        <h2>Combi Boilers</h2>
                                        <p></p>
                                            </div>
            </div>
        </header>
    )
}
export default Radiator;    