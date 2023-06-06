import './App.css';
import Landing from'./component/LandingPage.js';
import Form from'./component/Forms.js';
import Navbar from './component/Navbar.js';
import TokenDataFetcher from './component/fetch.js';

function App() {
  //navbar
  //landing page
  //form page
  return (
    <>
     <Navbar/>
     <Landing/>
     <Form/>
    <TokenDataFetcher/>
    </>
  );
}

export default App;
