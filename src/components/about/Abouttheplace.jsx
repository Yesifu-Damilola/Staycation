const Abouttheplace = () => {
  return (
    <>
      <div className="container abouttheplace d-flex">
        <div className="">
          <div className="aboutplace">
            <h3>About the place</h3>
            <p>
              Lorem ipsum dolor for your design, website, and copywriting works.
              Use our <br /> tool to generate chunks of text that is free from
              repetition and copyright <br /> claims. Take Action. 3D Images
              Increase Sales. Learn More. Sell More Onlie <br /> Today.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt <br /> in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Design is a plan or specifiaction for the construction of an
              object or system <br /> or for the implementation of an activity
              or process, or the result of that plan <br /> or specification in
              the form of a prototype, product or process. The national <br />
              agency for design: enabling Singapore to use design for economic
              growth <br /> and to make lives better.
            </p>
          </div>
          <div className="ic-apartments d-flex">
            <div className="bedroom">
              <div>
                <img src="src/assets/ic_bedroom.png" alt="ic_bedroom" />
              </div>
              <span className="ic-digit"> 3 </span>
              <span className="ic-rooms"> bedrooms </span>
            </div>
            <div className="livingroom">
              <div>
                <img src="src/assets/ic_livingroom.png" alt="ic_livingroom" />
              </div>
              <span className="ic-digit"> 1 </span>
              <span className="ic-rooms"> living room </span>
            </div>
            <div className="bathrooms">
              <div>
                <img src="src/assets/ic_bathroom.png" alt="ic_bathroom" />
              </div>
              <p>
                3 <span> bathrooms </span>
              </p>
            </div>
            <div className="dining-room">
              <div>
                <img src="src/assets/ic_diningroom.png" alt="ic_diningroom" />
              </div>
              <span className="ic-digit"> 1 </span>
              <span className="ic-rooms"> dining room</span>
            </div>
          </div>
          <div className="ic-apartments d-flex">
            <div className="mbp-wifi">
              <div>
                <img src="src/assets/ic_wifi.png" alt="ic_wifi" />
              </div>
              <span className="ic-digit"> 10 </span>
              <span className="ic-rooms"> mbp/s </span>
            </div>
            <div className="ic-units">
              <div>
                <img src="src/assets/ic_ac.png" alt="ic_ac" />
              </div>
              <span className="ic-digit"> 2 </span>
              <span className="ic-rooms"> units ready </span>
            </div>
            <div className="refrigerators">
              <div>
                <img
                  src="src/assets/ic_refrigerators.png"
                  alt="ic_refrigerators"
                />
              </div>
              <span className="ic-digit"> 2 </span>
              <span className="ic-rooms"> refrigerators </span>
            </div>
            <div className="television">
              <div>
                <img src="src/assets/ic_tv.png" alt="ic_tv" />
              </div>
              <span className="ic-digit"> 4 </span>
              <span className="ic-rooms"> television </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="booking">
            <h3>Start Booking</h3>
            <span className="dollar">
              $280 <span className="per-night">per night</span>
            </span>
            <span className="stay">How long you will stay?</span>
          </div>
          <div className="button">
            <button onClick={"increase()"} className="btnminus">
              -
            </button>
            <span className="num"> 2 night </span>
            <button onClick={"decrease()"} className="btnadd">
              +
            </button>
          </div>

          <div>
            <span className="pickadate">Pick a Date</span>
            <button className="calendar-img">
              <img
                src="src/assets/ic_calendar.png"
                alt="ic_calendar"
                className="calendar"
              />
              <span className="date"> 20 Jan - 22 Jan </span>
            </button>
            <p className="youpay">
              You will pay <span className="usd"> $480 USD </span> for
              <span className="usd"> 2 night </span>
            </p>
            <button className="book-btn"> Continue Book </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouttheplace;
