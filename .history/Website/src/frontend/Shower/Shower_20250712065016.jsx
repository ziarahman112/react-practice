import styles from './Shower.module.css';
import showerValve from '../../assets/showerValves.jpeg';
import thermostatic from '../../assets/thermostaticShower.jpeg';
import electricShower from '../../assets/electricShower.jpeg';
import smart from '../../assets/smartShower.jpeg';
import digital from '../../assets/digitalShower.jpeg';
import power from '../../assets/powerShower.jpeg';
import mixer from '../../assets/mixerShower.jpeg';
import tower from '../../assets/showerTower.jpeg';

function Shower (){
    return (
        <header> 
            <h1> Shower page</h1>
            <div>
                <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={electricShower} alt="Electric Shower" /> </a>
                       <h2>Electric Shower</h2>
                       <p></p>                                               
                </div>

                   <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={mixer} alt="Mixer Shower" /> </a>
                       <h2>Mixer Showers</h2>
                       <p></p>   

                          <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={power} alt="Power Shower" /> </a>
                       <h2>Power Showers</h2>
                       <p></p>                                               
                </div>

                   <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={digital} alt="Digital Showers" /> </a>
                       <h2>Digital Showers</h2>
                       <p></p>                                               
                </div>

                   <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={smart} alt="Smart Shower" /> </a>
                       <h2>Smart Showers</h2>
                       <p></p>                                               
                </div>

                   <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={tower} alt="Shower Tower" /> </a>
                       <h2>Shower Towers</h2>
                       <p></p>                                               
                </div>

                   <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={thermostatic} alt="Thermostatic Shower" /> </a>
                       <h2>Thermostatic Showers</h2>
                       <p></p>                                               
                </div>

                   <div>
                      <a href="/vanity"><img className={styles.radiatorImage} src={showerValve} alt="Shower Valve" /> </a>
                       <h2>Shower Valves</h2>
                       <p></p>                                               
                </div>


                </div>
            </div>
        </header>
    )
}
export default Shower;