    import combi from '../../assets/combi.avif';
    import styles from './Boiler.module.css';
    import gas from '../../assets/gas.avif';
    import system from '../../assets/system.avif';
    import electric from '../../assets/electric.webp';
    import oil from '../../assets/oil.avif';
    import lpg from '../../assets/lpg.avif';
    import commercial from '../../assets/commercial.avif';
    import accessories from '../../assets/accessories.webp';

    function Boiler() {
    return (
      <div>
        <h1>Boilers</h1>
        
       <div>
<h2>Shop By Type</h2>
        <div className = {styles.boiler}>
                        <a href="/vanity"><img className={styles.boilerImage} src={combi} alt="Combi Boiler" /> </a>
                        <h2>Combi Boilers</h2>
                        <p></p>
                            </div>

            <div className = {styles.boiler}>
                        <a href="/vanity"><img className={styles.boilerImage} src={gas} alt="Gas Boiler" /> </a>
                        <h2>Gas Boilers</h2>
                        <p></p>
                            </div>

                                <div className = {styles.boiler}>
                                <a href="/vanity"><img className={styles.boilerImage} src={system} alt="System Boiler" /> </a>
                                <h2>System Boilers</h2>
                                <p></p>
                            </div>

                            <div className = {styles.boiler}>
                                <a href="/vanity"><img className={styles.boilerImage} src={electric} alt="Electric Boiler" /> </a>
                                <h2>Electric Boilers</h2>
                                <p></p>
                            </div>

                <div className = {styles.boiler}>
                                <a href="/vanity"><img className={styles.boilerImage} src={oil} alt="Oil Boiler" /> </a>
                                <h2>Oil Boilers</h2>
                                <p></p>
                            </div>


                    <div className = {styles.boiler}>
                                <a href="/vanity"><img className={styles.boilerImage} src={lpg} alt="LPG Boiler" /> </a>
                                <h2> LPG Boilers</h2>
                                <p></p>
                            </div>
                
                    <div className = {styles.boiler}>
                                <a href="/vanity"><img className={styles.boilerImage} src={commercial} alt="Commercial Boiler" /> </a>
                                <h2>Commercial Boilers</h2>
                                <p></p>
                            </div>

                        <div className = {styles.boiler}>
                                <a href="/vanity"><img className={styles.boilerImage} src={accessories} alt="Boiler Accessories" /> </a>
                                <h2>Boiler Accessories</h2>
                                <p></p>
                            </div>


                            </div>
      </div>
    );
    }
    export default Boiler;