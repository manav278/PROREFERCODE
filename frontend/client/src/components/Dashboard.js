import React from 'react'
import '../App.css'
export default function Dashboard() {
    return (
        <div>
            {/* ----------------------------------------- */}
            <div className="container-fluid dash">

                {/* ----------------------------------------- */}

                <div class="container px-4 text-center">
                    <div class="row gx-2">
                        <div class="col-12">
                            <div class="p-3 text-white">
                                <h1>Title/Tagline of ProRefer</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------- */}

                <div class="container-fluid px-4 text-center">
                    <div class="row gx-2">

                        {/* *********************************** */}

                        <div class="col-lg-4 col-md-5 col-sm-6">
                            <div class="p-3 bg-secondary dashinner2 text-white">
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
                                    <p>Total Referrals Requested : 100</p>
                                </div>
                                <div>
                                    <p>Total Referrals Received : 50</p>
                                </div>
                                <div>
                                    <p>Monthly Requests Received : 4</p>
                                </div>
                                <div>
                                    <p>Monthly Requests Sent : 44</p>
                                </div>
                                <div>
                                    <p>Last Referral Date : 3/10/2003</p>
                                </div>
                                <div>
                                    <p>Warning : 3</p>
                                </div>
                            </div>
                        </div>

                        {/* *********************************** */}

                        <div class="col-lg-8 col-md-7 col-sm-6">
                            <div class="p-3 bg-secondary dashinner2">
                                <h1>Dashboard Receive Sent Companies</h1>
                            </div>
                        </div>

                        {/* *********************************** */}

                    </div>
                </div>
                {/* ----------------------------------------- */}


            </div>
            {/* ----------------------------------------- */}
        </div>
    )
}