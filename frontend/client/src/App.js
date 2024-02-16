import logo from './logo.svg';
import ReferralForm from './components/ReferralForm';
import './App.css';
import MainNav from './components/MainNav';
import Home from './components/Dashboard/Home';

function App() {
  return (
    <div>
    <MainNav></MainNav>
      <Home></Home>
      <ReferralForm></ReferralForm>
    </div>
  );
}

export default App;
