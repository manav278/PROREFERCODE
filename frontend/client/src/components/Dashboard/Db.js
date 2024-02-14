import React from "react";

const Db = () => {
  return (
    <div
      class="container px-4 text-center"
      style={{ backgroundColor: "black" }}
    >
      <div class="row gx-5 align-items-center">
        <div class="col">
          <div class="p-3">
            <p style={{ color: "white" }}>
              "Seeking a referral for your dream position at your preferred
              company? You're in luck! Simply request it here. If you need more
              information, check out our FAQ section. We've got all the details
              you need to navigate the referral process smoothly. Don't miss out
              on this opportunity to boost your chances of landing your ideal
              role. Take the first step towards your career goals today!"
            </p>

            <button type="button" class="btn btn-primary">
              Request Referral
            </button>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <p style={{ color: "white" }}>
              Ensure your resume is always current by updating it here. This
              updated version will serve as the basis for any referral requests
              you make. Keeping your resume up-to-date is crucial for seizing
              new opportunities and showcasing your skills effectively
            </p>

            <button type="button" class="btn btn-primary">
              Resume
            </button>
          </div>
        </div>
        {/* <hr style={{color:'white'}}/> */}
      </div>
    </div>
  );
};

export default Db;
