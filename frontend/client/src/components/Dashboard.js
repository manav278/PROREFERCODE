import React from 'react'
import '../App.css'
export default function Dashboard() {
    return (
        <div>
            <div className="container-fluid dash text-white" >

                {/* NavBar */}

                {/* Row1 */}

                <div className="row dashinner1 text-center">
                    <div className="col-lg-12 bg-secondary">
                        <h1>Title/Tagline of ProRefer</h1>
                    </div>
                </div>

                {/* Row2 */}

                <div className="row dashinner2 text-center">
                    <div className="col-lg-5 col-md-6 col-sm-12 bg-secondary" style={{ border: "2px solid black" }}>
                        <div>
                            <button type="button" class="btn btn-dark">Edit Profile</button>
                        </div>
                        <div>
                            <p>Name : Manav Jayesh Patel</p>
                        </div>
                        <div>
                            <p>Location : Vadodara,Gujarat</p>
                        </div>
                        <div>
                            <p>Referrals Requested : 100</p>
                        </div>
                        <div>
                            <p>Referrals Received : 50</p>
                        </div>
                        <div>
                            <p>Referrals Requests Received : 4</p>
                        </div>
                        <div>
                            <p>Monthly Requests : 44</p>
                        </div>
                        <div>
                            <p>Last_Referral_Date : 3/10/2003</p>
                        </div>
                        <div>
                            <p>Warning : 3</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 bg-secondary" style={{ border: "2px solid black" }}>
                        Dashboard Receive Sent Companies
                    </div>
                </div>
            </div>
        </div>
    )
}
