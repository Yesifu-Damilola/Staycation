const Apartementkitchen = () => {
  return (
    <>
      <div className="container">
        <h3 className="apartement-kitchen">Apartement with kitchen</h3>
        <div className="houses-backyard d-flex">
          <div className="section1">
            <div className="section-img">
              <img src="src/assets/ps wood.png" alt="ps-wood" />
            </div>
            <div className="span-para">
              <span>Green Park</span>
              <p>Tangerang, Indonesia</p>
            </div>
          </div>
          <div className="aggana-bogor">
            <div>
              <img src="src/assets/onefive.png" alt="onefive" />
            </div>
            <div className="span-para">
              <span>Podo Wae</span>
              <p>Madiun, Indonesia</p>
            </div>
          </div>
          <div className="minimal">
            <div>
              <img src="src/assets/minimal.png" alt="minimal" />
            </div>
            <div className="btn7-text">
              <button>popular choice</button>
            </div>
            <div className="span-para">
              <span>Silver Rain</span>
              <p>Bandung, Indonesia</p>
            </div>
          </div>
          <div className="stays-home">
            <div>
              <img src="src/assets/stays-home.png" alt="stays-home" />
            </div>
            <div className="span-para">
              <span>Cashville</span>
              <p>Kemang, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartementkitchen;
