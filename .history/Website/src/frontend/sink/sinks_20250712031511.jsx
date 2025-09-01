import styles from './sinks.module.css';

function sinks() {
    return (
        <header>
            <h1>Bathroom Basins</h1>
            
              <div className = {styles.sink}>
                <a href="/ShowerBath"><img className={styles.sinkImage} src={showerbath} alt="Shower Bath" /> </a>
                <h2>Basin Taps</h2>
                 <p></p>
                    </div>
        </header>
    )
}
export default sinks;