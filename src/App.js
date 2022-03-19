import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>I am inside App component</h1>
      <p>We are testing the working of React Components</p>
      <Home name="Sahith" pincode="507101" city="Chennai" />
      <Home name="Toffi" pincode="201902" city="Hyderabad" />
      <Home name="Hepzibha" city="Bangalore" pincode="507103" />
    </div>
  );
}

export default App;
