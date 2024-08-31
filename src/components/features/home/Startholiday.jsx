const Startholiday = () => {
  return (
    <>
      <div className="container">
        <div className="phase1 d-flex">
          <div className="holiday">
            <h3>Forget Your Main Work,</h3>
            <h3>Start Holiday Now!</h3>
            <p>
              We provide you what you need to enjoy your holiday with <br />
              family. Time to make another memorable moments.
            </p>
            <div>
              <button className="show-me " onClick={""}>
                Show Me Now
              </button>
            </div>
            <div className="ic d-flex">
              <div className="traveler">
                <div>
                  <img src="src/assets/ic_cities.png" alt=" ic_traveler" />
                </div>
                <span className="cost">80,409</span> travelers
              </div>
              <div className="cities">
                <div>
                  <img src="src/assets/ic_traveler.png" alt="ic_cities" />
                </div>
                <span className="cost">1,492</span> cities
              </div>
              <div className="treasures">
                <div>
                  <img src="src/assets/ic_treasures.png" alt="ic_treasures" />
                </div>
                <span className="cost">862</span> treasures
              </div>
            </div>
          </div>
          <div className="rect-yacht">
            <img
              src="src/assets/Rectangle 18.png"
              alt="Rectangle"
              className="rect"
            />
            <img
              src="src/assets/lift-yacht.png"
              alt="lift-yacht"
              className="yacht"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Startholiday;
