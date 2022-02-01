import './App.css';
import Header from './components/header';
import CardSection from './components/card-section'; 
import ChartsSection from './components/charts-section'; 
import MessagingSection from './components/messaging-section'; 
import Packages from './components/packages'; 
import FAQ from './components/faq'; 

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <ChartsSection />
      <MessagingSection />
      <Packages />
      <FAQ />
    </div>
  );
}

export default App;
