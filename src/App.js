import logo from './logo.svg';
import './App.css';
import Homepage from './screens/homepage';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Copyright from './Components/Copyright';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <FAQs />
      <Copyright />
    </div>
  );
}

export default App;
