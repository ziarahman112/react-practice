import styles from './sinks.module.css';
import basintap from '../../assets/basin tap.avif';

function sinks() {
    return (
        <header>
            <h1>Bathroom Basins</h1>
            <div >

              <div className = {styles.sink}>
                <a href="/ShowerBath"><img className={styles.sinkImage} src={basintap} alt="Shower Bath" /> </a>
                <h2>Basin Taps</h2>
                 <p></p>
                    </div>
                    </div>
        </header>
    )
}
export default sinks;