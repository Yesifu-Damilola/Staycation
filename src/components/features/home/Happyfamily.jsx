const Happyfamily = () => {
  return (
    <>
      <div className="container happy-family">
        <div className="families d-flex">
          <img
            src="src/assets/family(1).png"
            alt="family(1)"
            className="family-rect"
          />

          <img
            src="src/assets/family(2).png"
            alt="family(2)"
            className="family-pic"
          />
        </div>

        <div className="family-info">
          <h3>Happy Family</h3>
          <div className="starts">
            <img src="src/assets/stars-review.png" alt="stars-review" />
          </div>
          <p>
            What a great trip with my family and I <br /> should try again next
            time soon ...
          </p>
          <span className="ui-ux">Adi, UI/UX Designer</span>
          <div className="stories">
            <button className="stories-btn">Read Our Stories</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Happyfamily;
