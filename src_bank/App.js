import './App.css';
import Header from './components/header';
import CardSection from './components/card-section'; 
import ChartsSection from './components/charts-section'; 
import MessagingSection from './components/messaging-section'; 
import Packages from './components/packages'; 

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <ChartsSection />
      <MessagingSection />
      <Packages />
    </div>
  );
}

export default App;
