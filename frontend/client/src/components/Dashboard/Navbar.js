import React, {useState} from 'react'
import Db from "./Db";
import Received from "./Received";
import Sent from "./Sent";
import Company from "./Company";
const CustomNavbar = () => {

  const [mode, setMode] = useState('Dashboard');

  const handleDashboardClick = () => {
    setMode('Dashboard');
  }
  const handleReceivedClick = () => {
    setMode('Received');
  }
  const handleSentClick = () => {
    setMode('Sent');
  }
  const handleCompanyClick = () => {
    setMode('Company');
  }

    return (
    <div className='navbuttons'>
      <button onClick={handleDashboardClick}>Dashboard</button>
      <button onClick={handleReceivedClick}>Received</button>
      <button onClick={handleSentClick}>Sent</button>
      <button onClick={handleCompanyClick}>Companies</button>
      <hr style={{color:'white'}}/>
      {(mode==='Dashboard' && <Db/>)}
      {(mode==='Received' && <Received/>)}
      {(mode==='Sent' && <Sent/>)}
      {(mode==='Company' && <Company/>)}
    </div>
    );
}

export default CustomNavbar
