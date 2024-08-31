const Transactionpay = () => {
  return (
    // <main>
    //   <div className="container">
    //     <div className="booking-btn d-flex">
    //       <div>
    //         <hr />
    //       </div>

    //       <span className="check mark-1">
    //         <i className="fa-solid fa-check"></i>
    //       </span>

    //       <div className="horizontal-line">
    //         <hr />
    //       </div>
    //       <span className="check mark-2">2</span>
    //       <div className="horizontal-line">
    //         <hr />
    //       </div>
    //       <span className="check mark-3">3</span>
    //     </div>
    //     <div className="booking">
    //       <h3>Payment</h3>
    //       <p>Kindly follow the instruction below</p>
    //     </div>
    //     <div className="payment d-flex">
    //       <div className="payment-usd">
    //         <span className="transfer">Transfer Payment:</span>
    //         <br />
    //         <span className="tax">Tax: 10%</span>
    //         <p className="total">
    //           Sub total: <span className="usd">$480 USD</span>
    //         </p>
    //         <p className="total">
    //           Total: <span className="usd">$580 USD</span>
    //         </p>
    //         <div>
    //           <img src="src/assets/bca.png" alt="bca" />
    //           <span className="bank">Bank Central Asia</span>
    //           <br />
    //           <span className="tesla-span">2208 1996</span>
    //           <br />
    //           <span className="tesla-span">Tesla Inc.</span>
    //         </div>
    //         <div className="mandiri">
    //           <img
    //             src="src/assets/mandiri.png"
    //             alt="mandiri"
    //             className="mandiri-pic"
    //           />
    //           <span className="bank">Bank Mandiri</span>
    //           <br />
    //           <span className="tesla-span">2208 1996</span>
    //           <br />
    //           <span className="tesla-span">Tesla Inc.</span>
    //         </div>
    //       </div>
    //       <div className="vertical-line">
    //         <hr />
    //       </div>
    //       <div>
    //         <div className="names-input">
    //           <div className="names">
    //             <label htmlFor="username">Upload Transfer Proof</label>
    //           </div>
    //           <div className="text-name">
    //             <input
    //               type="text"
    //               id="firstname"
    //               placeholder="Browse a file ..."
    //               className="enter-text border-none focus:outline-none"
    //             />
    //           </div>
    //         </div>
    //         <div className="names-input">
    //           <div className="names">
    //             <label htmlFor="username">Bank Origin</label>
    //           </div>
    //           <div className="text-name">
    //             <input
    //               type="text"
    //               id="firstname"
    //               placeholder="Please type here ..."
    //               className="enter-text border-none focus:outline-none"
    //             />
    //           </div>
    //         </div>
    //         <div className="names-input">
    //           <div className="names">
    //             <label htmlFor="username">Sender Name</label>
    //           </div>
    //           <div className="text-name">
    //             <input
    //               type="text"
    //               id="firstname"
    //               placeholder="Please type here ..."
    //               className="enter-text border-none focus:outline-none"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pay-submit">
    //       <button type="submit" className="cancel">
    //         Cancel
    //       </button>
    //     </div>
    //   </div>

    // </main>

    <main>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-auto">
            <hr className="border-t border-gray-300" />
          </div>
          <span className="">
            <i className="fa-solid fa-check"></i>
          </span>
          <div className="horizontal-line w-full md:w-auto">
            <hr className="border-t border-gray-300" />
          </div>
          <span className="">2</span>
          <div className="horizontal-line w-full md:w-auto">
            <hr className="border-t border-gray-300" />
          </div>
          <span className="">3</span>
        </div>
        <div className="booking mt-4 text-center">
          <h3 className="text-xl font-semibold">Payment</h3>
          <p className="text-sm">Kindly follow the instruction below</p>
        </div>
        <div className="payment flex flex-col md:flex-row items-start mt-4">
          <div className="payment-usd w-full md:w-1/2">
            <span className="transfer text-lg">Transfer Payment:</span>
            <br />
            <span className="tax">Tax: 10%</span>
            <p className="total mt-2">
              Sub total: <span className="usd">$480 USD</span>
            </p>
            <p className="total">
              Total: <span className="usd">$580 USD</span>
            </p>
            <div className="mt-4">
              <img
                src="src/assets/bca.png"
                alt="bca"
                className="inline-block"
              />
              <span className="bank">Bank Central Asia</span>
              <br />
              <span className="tesla-span">2208 1996</span>
              <br />
              <span className="tesla-span">Tesla Inc.</span>
            </div>
            <div className="mandiri mt-4">
              <img
                src="src/assets/mandiri.png"
                alt="mandiri"
                className="mandiri-pic inline-block"
              />
              <span className="bank">Bank Mandiri</span>
              <br />
              <span className="tesla-span">2208 1996</span>
              <br />
              <span className="tesla-span">Tesla Inc.</span>
            </div>
          </div>
          <div className="vertical-line w-full md:w-auto md:mx-4 my-4 md:my-0">
            <hr className="border-l border-gray-300 h-full" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="names-input mt-4 md:mt-0">
              <div className="names">
                <label htmlFor="uploadProof">Upload Transfer Proof</label>
              </div>
              <div className="text-name mt-2">
                <input
                  type="text"
                  id="uploadProof"
                  placeholder="Browse a file ..."
                  className="enter-text w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="names-input mt-4">
              <div className="names">
                <label htmlFor="bankOrigin">Bank Origin</label>
              </div>
              <div className="text-name mt-2">
                <input
                  type="text"
                  id="bankOrigin"
                  placeholder="Please type here ..."
                  className="enter-text w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="names-input mt-4">
              <div className="names">
                <label htmlFor="senderName">Sender Name</label>
              </div>
              <div className="text-name mt-2">
                <input
                  type="text"
                  id="senderName"
                  placeholder="Please type here ..."
                  className="enter-text w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pay-submit mt-6 text-center">
          <button
            type="submit"
            className="cancel border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default Transactionpay;
