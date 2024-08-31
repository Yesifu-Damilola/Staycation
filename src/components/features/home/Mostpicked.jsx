const Mostpicked = () => {
  return (
    <>
      <div className="container pb-5">
        <h3 className="picked">Most Picked</h3>
        <div className="pools d-flex">
          <div className="beach-club">
            <div className="club-pool">
              <img src="src/assets/Rectangle 19.png" alt="club-pool" />
            </div>
            <div className="btn1-text">
              <button>$50 per night</button>
            </div>
            <div className="span-para1">
              <span className="span-club">Finns Beach Club</span>
              <p className="para1">Denpasar, Ball</p>
            </div>
          </div>
          <div className="montigo-resort-montana">
            <div className="montigo-resort">
              <div className="resort-pool">
                <img src="src/assets/Rectangle 19 (2).png" alt="resort-pool" />
              </div>
              <div className="btn2-text">
                <button>$22 per night</button>
              </div>
              <div className="span-para2">
                <span className="span-resorts">Montigo Resort</span>
                <p className="para2">Rio De Janeiro, Brazil</p>
              </div>
            </div>
            <div className="montana">
              <div className="relax-pool">
                <img src="src/assets/pic (4).png" alt="relax-pool" />
              </div>
              <div className="btn3-text">
                <button>$858 per night</button>
              </div>
              <div className="span-para3">
                <span className="span-montana">Montana</span>
                <p className="para3">Berlin, Germany</p>
              </div>
            </div>
          </div>
          <div className="kalpa-caesar">
            <div className="kalpa-tree">
              <div className="hotel-pool">
                <img src="src/assets/pic 3.png" alt="hotel-pool" />
              </div>
              <div className="btn4-text">
                <button>$62 per night</button>
              </div>
              <div className="span-para4">
                <span className="span-kalpa">Kalpa Tree</span>
                <p className="para4">Ternate, Nusa Tenggara Barat </p>
              </div>
            </div>
            <div className="caesar-palace">
              <div className="side-pool">
                <img src="src/assets/pic (5).png" alt="side-pool" />
              </div>
              <div className="btn5-text">
                <button>$72 per night</button>
              </div>
              <div className="span-para5">
                <span className="span-caesar">Caesar Palace</span>
                <p className="para5">Las Vegas, America</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mostpicked;
