import logo from './logo.svg';
import './App.css';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
    <h1>This is Web app which perform Sorting and Filtering on third Party API</h1>
      <Products />
    </div>
  );
}

export default App;
