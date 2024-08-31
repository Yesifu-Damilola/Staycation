const Hotelslivingroom = () => {
  return (
    <>
      <div className="container">
        <h3 className="living-room">Hotels with living room</h3>
        <div className="houses-backyard d-flex">
          <div className="section1">
            <div className="section-img">
              <img src="src/assets/green-park .png" alt="green-park" />
            </div>
            <div className="span-para">
              <span>Green Park</span>
              <p>Tangerang, Indonesia</p>
            </div>
          </div>
          <div className="aggana-bogor">
            <div>
              <img src="src/assets/podo-wae.png" alt="podo-wae" />
            </div>
            <div className="span-para">
              <span>Podo Wae</span>
              <p>Madiun, Indonesia</p>
            </div>
          </div>
          <div className="seattle-jakarta">
            <div>
              <img src="src/assets/silver-rain.png" alt="silver-rain" />
            </div>
            <div className="span-para">
              <span>Silver Rain</span>
              <p>Bandung, Indonesia</p>
            </div>
          </div>
          <div className="cashville">
            <div>
              <img src="src/assets/cashville.png" alt="cashville" />
            </div>
            <div className="btn7-text">
              <button>popular choice</button>
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

export default Hotelslivingroom;
