import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pt-8">
        <hr className="border border-[#E5E5E5] my-10" />

        <section className="wrapper md:flex flex-wrap items-start justify-center md:justify-between gap-4 py-4">
         
          <div className="space-y-2 w-full sm:w-3/4 md:w-1/2 lg:w-auto text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-[#152C5B]">
              <span className="text-[#3252DF]">Stay</span>cation.
            </Link>
            <p className="text-[#B0B0B0] text-lg py-2 max-w-xs mx-auto md:mx-0">
              We kaboom your beauty holiday instantly and memorably.
            </p>
          </div>

         
          <div className="space-y-2 w-full sm:w-1/2 md:w-1/4 lg:w-auto text-center md:text-left">
            <h3 className="text-[#152C5B] text-lg font-semibold">
              For Beginners
            </h3>
            <div>
              <Link to="/payment" className="text-[#B0B0B0] text-base block">
                New Account
              </Link>
            </div>
            <div>
              <Link to="/info" className="text-[#B0B0B0] text-base block">
                Book a Room
              </Link>
            </div>
            <div>
              <Link to="/payments" className="text-[#B0B0B0] text-base block">
                Payments
              </Link>
            </div>
          </div>

      
          <div className="space-y-2 w-full sm:w-1/2 md:w-1/4 lg:w-auto text-center md:text-left">
            <h3 className="text-[#152C5B] text-lg font-semibold">Explore Us</h3>
            <div>
              <Link to="/about" className="text-[#B0B0B0] text-base block">
                About
              </Link>
            </div>
            <div>
              <Link to="/" className="text-[#B0B0B0] text-base block">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link to="/" className="text-[#B0B0B0] text-base block">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="space-y-2 w-full sm:w-3/4 md:w-1/2 lg:w-auto text-center md:text-left">
            <h3 className="text-[#152C5B] text-lg font-semibold">
              Getting Touch
            </h3>
            <div>
              <Link
                to="mailto:support@staycation.id"
                className="text-[#B0B0B0] text-base block"
              >
                support@staycation.id
              </Link>
            </div>
            <div>
              <Link
                to="mailto:info@example.com"
                className="text-[#B0B0B0] text-base block"
              >
                info@example.com
              </Link>
            </div>
            <div>
              <Link
                to="tel:02122081996"
                className="text-[#B0B0B0] text-base block"
              >
                021 - 2208 - 1996
              </Link>
            </div>
            <div>
              <span className="text-[#B0B0B0] text-base block">
                Staycation Oy, Jakarta
              </span>
            </div>
          </div>
        </section>

        <div className="text-center py-6">
          <Link to="" className="text-[#B0B0B0]">
            <span> Copyright 2019 &#8226; </span> All rights reserved &#8226;
            Staycation
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
