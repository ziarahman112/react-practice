
function ShowerBath() {
  return (
    <div>
      <h1>Shower Bath</h1>

       <div className={styles.card}>
              <img className="card-image" src={basin} alt="Bathroom Basin" />
              <h2 className="card-title">Bathroom Basins</h2>
              <p className='card-p'>
                  Discover a variety of bathroom basins, including modern and traditional styles in all shapes and sizes to suit your space.
              </p>
              <button className={styles.Button} onClick={sinks}>Go To</button>
          </div>
  
    </div>
  );
}
export default ShowerBath;