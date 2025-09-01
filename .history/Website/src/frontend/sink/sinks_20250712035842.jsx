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

</header>
    )
}
export default sinks;