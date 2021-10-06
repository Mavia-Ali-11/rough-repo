import Routes from './config/routes'
import ContextProvider from './context/context';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}

export default App;
