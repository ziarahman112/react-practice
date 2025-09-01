import basintap from '../../assets/basin tap.avif';

function Tap () {
    return (
           <header>
            <h1>Bathroom Basins</h1>
            <div >

              <div className = {styles.tap}>
                <a href="/ShowerBath"><img className={styles.tapImage} src={basintap} alt="Shower Bath" /> </a>
                <h2>Basin Taps</h2>
                 <p></p>
                    </div>
                    </div>
        </header>
    )
}
export default Tap;