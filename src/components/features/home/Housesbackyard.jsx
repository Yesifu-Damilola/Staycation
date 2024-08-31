const Housesbackyard = () => {
  return (
    <>
      <div className="container">
        <h3 className="backyard">Houses with backyard</h3>
        <div className="houses-backyard d-flex">
          <div className="section1">
            <div className="section-img">
              <img
                src="src/assets/section (1).png"
                alt="sec1"
              />
            </div>
            <div className="btn6-text">
              <button>popular choice</button>
            </div>
            <div className="span-para">
              <span>Tabby Town</span>
              <p>Gunug Batu, Indonesia</p>
            </div>
          </div>
          <div className="aggana-bogor">
            <div>
              <img src="src/assets/section(2).png" alt="sec2" />
            </div>
            <div className="span-para">
              <span>Anggana</span>
              <p>Bogor, Indonesia</p>
            </div>
          </div>
          <div className="seattle-jakarta">
            <div>
              <img src="src/assets/section(3).png" alt="sect3" />
            </div>
            <div className="span-para">
              <span>Seattle Rain</span>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="wooden-wonosobo">
            <div>
              <img src="src/assets/section(4).png" alt="sect4" />
            </div>
            <div className="span-para">
              <span>Wooden Pit</span>
              <p>Wonosobo, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Housesbackyard;
