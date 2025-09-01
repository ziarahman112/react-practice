import styles from './sinks.module.css';
import vanity from '../../assets/vanity.avif';
import wallhung from '../../assets/wall hung basin.avif';
import countertop from '../../assets/countertop.avif';
import corner from '../../assets/corner.avif';
import cloakroom from '../../assets/cloakroom.avif';
import full from '../../assets/fullpedestal.avif';
import semi from '../../assets/semipedestal.avif';

function sinks() {
    return (
        <header>
<h1>Bathroom Sinks</h1>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Vanity Units</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={wallhung} alt="Wall Hung Basin" /> </a>
                <h2>Wall Hung Basins</h2>
                 <p></p>
                    </div>


<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={countertop} alt="Counter Top Basin" /> </a>
                <h2>Counter Top Basins</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={corner} alt="Corner Basin" /> </a>
                <h2>Corner Basins</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={cloakroom} alt="Cloakroom Basin" /> </a>
                <h2>Small Cloakroom Basins</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={full} alt="Full Pedestal Basin" /> </a>
                <h2>Full Pedestal Basins</h2>
                 <p></p>
                    </div>

    <div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={semi} alt="Semi Pedestal Basin" /> </a>
                <h2>Semi Pedestal Basins</h2>
                 <p></p>
                    </div>

</header>
    )
}
export default sinks;