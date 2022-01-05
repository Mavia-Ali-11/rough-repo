import './App.css';
import Header from './components/header';
import CardSection from './components/card-section'; 
import ChartsSection from './components/charts-section'; 

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <ChartsSection />
    </div>
  );
}

export default App;
