const Thingstodo = () => {
  return (
    <>
      <div className="container">
        <div className="thingstodo">
          <h3>Things to do</h3>
          <div className="d-flex">
            <div className="nature-town">
              <div>
                <img src="src/assets/nature.png" alt="nature" />
              </div>
              <span>Tabby Town</span>
              <p>Nature</p>
            </div>
            <div className="nature-town">
              <div>
                <img src="src/assets/dog.png" alt="dog" />
              </div>
              <span>Dog Clubs</span>
              <p>Pool</p>
            </div>
            <div className="nature-town">
              <div>
                <img src="src/assets/shopping.png" alt="shopping" />
              </div>
              <span>Labour and Wait</span>
              <p>Shopping</p>
            </div>
            <div className="nature-town">
              <div>
                <img src="src/assets/beach.png" alt="Beach" />
              </div>
              <span>Snorkeling</span>
              <p>Beach</p>
            </div>
          </div>
        </div>
        <div className="happy-family d-flex">
          <div className="families d-flex">
            <img
              src="src/assets/family(1).png"
              alt="family(1)"
              className="family-rect"
            />

            <img
              src="src/assets/family 3 .png"
              alt="family(3)"
              className="family-pic"
            />
          </div>

          <div className="family-info">
            <h3>Happy Family</h3>
            <div className="starts">
              <img src="src/assets/stars (2).png" alt="stars-review" />
            </div>
            <p>
              As a wife I can pick a great trip with <br /> my own lovely family
              ... thank you!
            </p>
            <span className="ui-ux">Megan, Product Manager</span>
            <div className="stories">
              <button className="stories-btn">Read Our Stories</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thingstodo;
