
function BackToWall() {
    return (
        <header>
            <h1>Back to Wall Toilets</h1>
            <p>Explore our collection of back to wall toilets designed for modern bathrooms.</p>
            
            <div className={styles.toilet}>
                <img src={backToWall} alt="Back to Wall Toilet A" />
                <h2>Back to Wall Toilet A</h2>
                <p className={styles.rating}>5 ⭐⭐⭐⭐⭐ ratings</p>
                <p>£250</p>
                <p className={styles.inStock}>✅In Stock</p>
            </div>

            {/* Additional back to wall toilet items can be added here */}
        </header>
    );
}
export default BackToWall;