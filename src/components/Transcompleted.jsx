const Transcompleted = () => {
  return (
    <>
      <div className="container ">
        <div className="booking-btn d-flex">
          <span className="check mark-1 check-completed">
            <i className="fa-solid fa-check"></i>
          </span>

          <div className="horizontal-line">
            <hr />
          </div>
          <span className="check mark-1 check-completed">
            <i className="fa-solid fa-check"></i>
          </span>
          <div className="horizontal-line">
            <hr />
          </div>
          <span className="check mark-1 check-completed">
            <i className="fa-solid fa-check"></i>
          </span>
        </div>
        <div className="booking">
          <h3>Transaction Completed!</h3>
        </div>
        <div className="succes">
          <img src="src/assets/succes .png" alt="succes" />
        </div>
        <div className="complete">
          <div className="accepted">
            <span>We will inform you via email later</span>
            <br />
            <span>once this transaction has been accepted</span>
          </div>
          <div className="">
            <button type="submit" className="submit-book btn-book">
              Continue to Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transcompleted;
