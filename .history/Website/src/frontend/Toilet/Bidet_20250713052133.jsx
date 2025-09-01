import bidet from '../../assets/bidet.jpeg';
import styles from './Toilet.module.css';
function Bidet () {
    return (
        <header>
            <h1>Bidet Toilets</h1>
            <div className={styles.bidets}>
                <p>Explore our selection of bidet toilets for enhanced hygiene and comfort.</p>

                <div className={styles.bidetsItem}>
                    <a href="/bidet"><img className={styles.bidetsImage} src={bidet} alt="Bidet Toilet" /> </a>
                    <h2>Bidet Toilets</h2>
                    <p></p>
                </div>
            </div>
        </header>
    );
}
export default Bidet;