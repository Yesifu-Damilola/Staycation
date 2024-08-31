const Bookinginfor = () => {
  return (
    <>
      <div className="container">
        <div className="booking-btn d-flex">
          <div>
            <hr />
          </div>

          <span className="booking-1 book1 ">1</span>

          <div className="horizontal-line">
            <hr />
          </div>
          <span className="booking-1 booking-2">2</span>
          <div className="horizontal-line">
            <hr />
          </div>
          <span className="booking-1">3</span>
        </div>
        <div className="booking">
          <h3>Booking Information</h3>
          <p>Please fill up the blanks field below </p>
        </div>

        <div className="cashville-kemang">
          <div className="cashvilles">
            <div className="">
              <img src="src/assets/cashville@.png" alt="cashville@" />
            </div>
            <div className="d-flex">
              <div>
                <span className="cashvil-span">Cashville</span>
                <span className="kemang">Kemang, Indonesia</span>
              </div>
              <div>
                <p className="usdfor">
                  $480 USD <span className="two-night"> for </span>
                  <span> 2 night </span>
                </p>
              </div>
            </div>
          </div>
          <div className="vertical-line">
            <hr />
          </div>
          <div className="">
            <div className="names-input">
              <div className="names">
                <label htmlFor="username">First Name</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter Firstname"
                  className="enter-text"
                />
              </div>
            </div>
            <div className="">
              <div className="names">
                <label htmlFor="username">Last Name</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter Lastname"
                  className="enter-text"
                />
              </div>
            </div>
            <div className="">
              <div className="names">
                <label htmlFor="username">Email Address</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="emailaddress"
                  placeholder="matlab@gmail.com"
                  className="enter-text"
                />
              </div>
            </div>
            <div className="">
              <div className="names">
                <label htmlFor="username">Phone Number</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="phonenumber"
                  placeholder="+2348000000000"
                  className="enter-text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="continue-book">
          <div className="submit">
            <button type="submit" className="submit-book">
              Continue to Book
            </button>
          </div>
          <div className="submit">
            <button type="submit" className="cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookinginfor;
