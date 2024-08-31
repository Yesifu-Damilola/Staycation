const Transactionpayment = () => {
  return (
    <>
      <div className="container">
        <div className="booking-btn d-flex">
          <div>
            <hr />
          </div>

          <span className="check mark-1">
            <i className="fa-solid fa-check"></i>
          </span>

          <div className="horizontal-line">
            <hr />
          </div>
          <span className="check mark-2">2</span>
          <div className="horizontal-line">
            <hr />
          </div>
          <span className="check mark-3">3</span>
        </div>
        <div className="booking">
          <h3>Payment</h3>
          <p>Kindly follow the instruction below</p>
        </div>
        <div className="payment d-flex">
          <div className="payment-usd">
            <span className="transfer">Transfer Payment:</span>
            <br />
            <span className="tax">Tax: 10%</span>
            <p className="total">
              Sub total: <span className="usd">$480 USD</span>
            </p>
            <p className="total">
              Total: <span className="usd">$580 USD</span>
            </p>
            <div>
              <img src="src/assets/bca.png" alt="bca" />
              <span className="bank">Bank Central Asia</span>
              <br />
              <span className="tesla-span">2208 1996</span>
              <br />
              <span className="tesla-span">Tesla Inc.</span>
            </div>
            <div className="mandiri">
              <img
                src="src/assets/mandiri.png"
                alt="mandiri"
                className="mandiri-pic"
              />
              <span className="bank">Bank Mandiri</span>
              <br />
              <span className="tesla-span">2208 1996</span>
              <br />
              <span className="tesla-span">Tesla Inc.</span>
            </div>
          </div>
          <div className="vertical-line">
            <hr />
          </div>
          <div>
            <div className="names-input">
              <div className="names">
                <label htmlFor="username">Upload Transfer Proof</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="firstname"
                  placeholder="transferproof.png"
                  className="enter-text "
                />
              </div>
            </div>
            <div className="names-input">
              <div className="names">
                <label htmlFor="username">Bank Origin</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="firstname"
                  placeholder="BCA"
                  className="enter-text"
                />
              </div>
            </div>
            <div className="names-input">
              <div className="names">
                <label htmlFor="username">Sender Name</label>
              </div>
              <div className="text-name">
                <input
                  type="text"
                  id="firstname"
                  placeholder="Ihsan Adi"
                  className="enter-text "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pay-submit">
          <div className="">
            <button type="submit" className="submit-book btn-book">
              Continue to Book
            </button>
          </div>
          <button type="submit" className="cancel">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Transactionpayment;
