import React from "react";

const Db = () => {
  return (
    <div
      class="container px-4 text-center"
      style={{ backgroundColor: "black", border:"5px solid black",borderRadius:"8px"}}

    >
      <div class="row gx-5 align-items-center">
        <div class="col">
          <div class="p-3">
            <p style={{ color: "white" }}>
              Seeking a referral for your dream position at your preferred
              company? You're in luck! Simply request it here. If you need more
              information, check out our FAQ section. We've got all the details
              you need to navigate the referral process smoothly. Don't miss out
              on this opportunity to boost your chances of landing your ideal
              role. Take the first step towards your career goals today!
            </p>

            <button type="button" class="btn btn-primary border-light">
              Request Referral
            </button>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <p style={{ color: "white"}}>
              Transform your resume here for a stellar impression when
              requesting a referral. Your resume is your professional
              story—update it with your latest achievements and experiences to
              captivate potential employers. A well-crafted resume is your key
              to unlocking new career opportunities. Keep it current and
              compelling to highlight your unique skills and qualifications,
              setting you apart from the competition
            </p>

            <button type="button" class="btn btn-primary border-light">
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
