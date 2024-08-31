const Housedails = () => {
  return (
    <>
      <div className="container">
        <div className="home d-flex">
          <div className="house-details">
            <p className="home-p">
              Home / <span className="house-span"> House Details </span>
            </p>
          </div>
          <div className="resort-rio">
            <h3> Montigo Resort </h3>
            <span>Rio De Janeiro, Brazil</span>
          </div>
        </div>
        <div className="homes d-flex">
          <div className="home1">
            <img src="src/assets/home.png" alt="home.1" />
          </div>
          <div className="home2-home3">
            <img src="src/assets/home2.png" alt="home2" className="home2" />
            <img src="src/assets/home3.png" alt="home3" className="home3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Housedails;
