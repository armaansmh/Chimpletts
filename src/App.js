import logo from './logo.svg';
import './App.css';
import Homepage from './screens/homepage';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Copyright from './Components/Copyright';
import Roadmap from './Components/Roadmap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Roadmap />
      <div style={{
        backgroundColor: 'rgb(0, 26, 68)'
      }} className="border-t border-white w-screen flex flex-col items-center justify-center min-h-screen">
        <FAQs />
      </div>
      <Copyright />
    </div>
  );
}

export default App;
