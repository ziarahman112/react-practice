import styles from './sinks.module.css';
import vanity from '../../assets/vanity.avif';


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
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Wall Hung Basins</h2>
                 <p></p>
                    </div>


<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Counter Top Basins</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Counter Basins</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Small Cloackroom Basins</h2>
                 <p></p>
                    </div>

<div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Full Pedestal Basins</h2>
                 <p></p>
                    </div>

    <div className = {styles.sink}>
                <a href="/vanity"><img className={styles.tapImage} src={vanity} alt="Vanity Unit" /> </a>
                <h2>Semi Pedestal Basins</h2>
                 <p></p>
                    </div>

</header>
    )
}
export default sinks;